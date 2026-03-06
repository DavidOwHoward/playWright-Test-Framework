import {processIds} from '../fixtures/constants';
import {generateProcessPages} from './PageObjectGenerator';
import * as path from 'path';
import * as fs from 'fs/promises';

// replace the value to either be a single process or use processIds to generate for all processes in the db
const allProcesses = processIds;
await generateProcessPages([0]);