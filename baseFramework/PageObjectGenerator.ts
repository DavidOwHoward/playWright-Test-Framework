import path from 'node:path';
import fs from 'node:fs/promises';
import { BaseSql } from './BaseSql';
import { SqlQueries, type FieldRow } from './SqlQueries';



export type ProcessIdInput = number | number[];

const OUTPUT_ROOT = path.resolve(process.cwd(), 'Pages');
const PROCESS_IDS_PATH = path.resolve(process.cwd(), 'data', 'processIds.json');


const RESERVED_WORDS = new Set<string>([
  'break','case','catch','class','const','continue','debugger','default','delete','do','else','export','extends',
  'finally','for','function','if','import','in','instanceof','new','return','super','switch','this','throw','try',
  'typeof','var','void','while','with','yield','enum','await','implements','interface','let','package','private',
  'protected','public','static','null','true','false',
]);

// Field type -> wrapper class name 
const fieldWrapperLookup: Record<string, string> = {
  Text: 'TextField',
  'Date/Time': 'DateField',
  Numeric: 'NumericField',
  File: 'FileField',
  Label: 'LabelField',
  Checkbox: 'CheckboxField',
  ApprovalType: 'ApprovalField',
  Checklist: 'ChecklistField',
  ReverseCrossReference: 'RcrField',
  Choice: 'ChoiceField',
  AutoNumber: 'AutoNumField',
  DisplayList: 'DisplayListField',
  Frequency: 'FrequencyField',
  Command: 'CommandField',
  Video: 'VideoField',
  Picture:'PictureField'
};

// Static imports 
const IMPORT_BLOCK = `import { DetailsPageBase } from '../../basePages/DetailsPageBase';
import { TextField } from '../../components/fields/TextField';
import { ScrField } from '../../components/fields/ScrField';
import { NumericField } from '../../components/fields/NumericField';
import { DateField } from '../../components/fields/DateField';
import { FileField } from '../../components/fields/FileField';
import { McrField } from '../../components/fields/McrField';
import { ApprovalField } from '../../components/fields/ApprovalField';
import { LabelField } from '../../components/fields/LabelField';
import { CheckboxField } from '../../components/fields/CheckboxField';
import { RcrField } from '../../components/fields/RcrField';
import { ChecklistField } from '../../components/fields/ChecklistField';
import { ChoiceField } from '../../components/fields/ChoiceField';
import { AutoNumField } from '../../components/fields/AutoNumField';
import { VideoField } from '../../components/fields/VideoField';
import { CommandField } from '../../components/fields/CommandField';
import { DisplayListField } from '../../components/fields/DisplayListField';
import { FrequencyField } from '../../components/fields/FrequencyField';
import { PictureField } from '../../components/fields/PictureField';
`;


function sanitizeAlnum(input: string): { value: string; changed: boolean } {
  const cleaned = input.replace(/[^A-Za-z0-9]/g, '');
  return { value: cleaned, changed: cleaned !== input };
};


function fileBaseNameFromPName(pName: string): string {
  return sanitizeAlnum(pName).value;
};


function folderLetterFromFileBase(fileBase: string): string {
  return fileBase.charAt(0).toUpperCase();
};

function resolveWrapper(fTypename: string, source: 'fields' | 'scr' | 'mcr' | 'rcr'): string {
  if (source === 'scr') return 'ScrField';
  if (source === 'mcr') return 'McrField';
  return fieldWrapperLookup[fTypename] ?? fTypename;
};


function buildGetterName(
  fNameRaw: string,
  wrapper: string,
  countsByBaseName: Map<string, number>
): string {
  const sanitized = sanitizeAlnum(fNameRaw);
  let base = sanitized.value || 'Field';

  
  if (sanitized.changed) {
    base = `_${base}`;
  };

  
  const coreLower = base.replace(/^_+/, '').toLowerCase();
  if (RESERVED_WORDS.has(coreLower)) {
    const pascal = coreLower.charAt(0).toUpperCase() + coreLower.slice(1);
    base = `${pascal}${wrapper}`;
  };

  
  const count = countsByBaseName.get(base) ?? 0;
  countsByBaseName.set(base, count + 1);
  if (count === 0) return base;

  return `${'_'.repeat(count)}${base}`;
};

function getterBlock(getterName: string, sysName: string, secName: string, wrapper: string): string {
  return `
  get ${getterName}() {

    const { root, section } = this.fieldRootInSection(\`${sysName}\`, \`${secName}\`);

    return new ${wrapper}(this.page, root, async () => section.openAndWait(root));
  }`;
};

function classFileContent(className: string, getters: string[]): string {
  return `${IMPORT_BLOCK}

export class ${className} extends DetailsPageBase {${getters.join('\n')}
}
`;
};

async function ensureDir(dirPath: string): Promise<void> {
  await fs.mkdir(dirPath, { recursive: true });
};

async function writeProcessFile(pName: string, getters: string[]): Promise<string> {
  const fileBase = fileBaseNameFromPName(pName);
  if (!fileBase) {
    throw new Error(`pName "${pName}" sanitized to empty; cannot create file.`);
  };

  const letter = folderLetterFromFileBase(fileBase);
  const outFolder = path.join(OUTPUT_ROOT, letter);
  await ensureDir(outFolder);

  const fileStem = `${fileBase}_p`;
  const filePath = path.join(outFolder, `${fileStem}.ts`);

  
  try {
    await fs.unlink(filePath);
  } catch {
    // ignore
  };

  const body = classFileContent(fileStem, getters);
  await fs.writeFile(filePath, body, 'utf8');
  return filePath;
};

function normalizeProcessIds(input: ProcessIdInput): number[] {
  return Array.isArray(input) ? input : [input];
};

async function loadProcessIds(): Promise<number[]> {
  const jsonText = await fs.readFile(PROCESS_IDS_PATH, 'utf8');
  return JSON.parse(jsonText) as number[];
};


export async function generateProcessPages(processId: ProcessIdInput): Promise<string[]> {
  const ids = normalizeProcessIds(processId);

  const pool = await BaseSql.connect();
  const written: string[] = [];

  try {
    for (const id of ids) {
      // Run FieldObjects queries in specified order
      const fields = await SqlQueries.fields(pool, id);
      const scr = await SqlQueries.scr(pool, id);
      const mcr = await SqlQueries.mcr(pool, id);
      const rcr = await SqlQueries.rcr(pool, id);

      const all: Array<{ row: FieldRow; source: 'fields' | 'scr' | 'mcr' | 'rcr' }> = [
        ...fields.map((row) => ({ row, source: 'fields' as const })),
        ...scr.map((row) => ({ row, source: 'scr' as const })),
        ...mcr.map((row) => ({ row, source: 'mcr' as const })),
        ...rcr.map((row) => ({ row, source: 'rcr' as const })),
      ];

      if (all.length === 0) continue;

      
      const pName = all[0].row.pName;

      const countsByBaseName = new Map<string, number>();
      const getters: string[] = [];

      for (const { row, source } of all) {
        const wrapper = resolveWrapper(row.fTypename, source);
        const getterName = buildGetterName(row.fName, wrapper, countsByBaseName);
        getters.push(getterBlock(getterName, row.sysName, row.secName, wrapper));
      }

      const filePath = await writeProcessFile(pName, getters);
      written.push(filePath);
    }
  } finally {
    await pool.close();
  }

  return written;
};

/**
 * CLI usage:
 *   ts-node ./baseFramework/PageObjectGenerator.ts 2140
 *   ts-node ./baseFramework/PageObjectGenerator.ts 2140,2142,2144
 */
async function cli() {
  const arg = process.argv[2];

  let input: number | number[];

  if (!arg) {
    // no CLI argument → use stored processIds.json
    input = await loadProcessIds();
  } else {
    const ids = arg
      .split(',')
      .map(s => s.trim())
      .filter(Boolean)
      .map(Number)
      .filter(n => Number.isFinite(n));

    input = ids.length === 1 ? ids[0] : ids;
  };

  const files = await generateProcessPages(input);

  console.log(`Generated ${files.length} process pages`);
};


if (process.argv[1]?.includes('PageObjectGenerator')) {
  cli().catch(err => {
    console.error(err);
    process.exit(1);
  });
};
