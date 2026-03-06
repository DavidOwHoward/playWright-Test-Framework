import sql, { ConnectionPool, IResult } from 'mssql';

export type FieldRow = {
  pName: string;
  secName: string;
  fName: string;
  sysName: string;
  fTypename: string;
};

export class SqlQueries {
  static async fields(pool: ConnectionPool, processId: number): Promise<FieldRow[]> {
    const res: IResult<FieldRow> = await pool
      .request()
      .input('processId', sql.Int, processId)
      .query<FieldRow>(`
        SELECT Processes.Id,
               Processes.Name AS pName,
               DetailsLayoutSections.Name AS secName,
               REPLACE(TRIM(DetailsLayoutFields.Name), ' ', '') AS fName,
               REPLACE(TRIM(FieldTypes.Name), ' ', '') AS fTypename,
               DetailsLayoutFields.SystemName AS sysName
        FROM Processes
        INNER JOIN DetailsLayouts ON Processes.Id = DetailsLayouts.ProcessId
        INNER JOIN DetailsLayoutSections ON DetailsLayouts.Id = DetailsLayoutSections.DetailsLayoutId
        INNER JOIN DetailsLayoutFields ON DetailsLayoutSections.Id = DetailsLayoutFields.SectionId
        INNER JOIN Fields ON Processes.Id = Fields.ProcessId AND DetailsLayoutFields.Name = Fields.Name
        INNER JOIN FieldTypes ON Fields.FieldTypeId = FieldTypes.Id
        WHERE (Processes.IsRemoved = 0)
        GROUP BY Processes.Id, Processes.Name, DetailsLayouts.Name, DetailsLayoutSections.Name,
                 DetailsLayoutFields.Name, Processes.IsRemoved, FieldTypes.Name, FieldTypes.Id,
                 DetailsLayoutFields.SystemName, Fields.IsRemoved
        HAVING (DetailsLayouts.Name = N'Default Details Layout')
           AND (Processes.Id = @processId)
           AND (DetailsLayoutSections.Name <> N'_hidden')
           AND (Fields.IsRemoved = 0)
           AND (FieldTypes.Id NOT IN (6,9,11,13,14,17,19,22,24,25,26,27,28,31,32))
      `);

    return res.recordset ?? [];
  };

   static async scr(pool: ConnectionPool, processId: number): Promise<FieldRow[]> {
    const res: IResult<FieldRow> = await pool
      .request()
      .input('processId', sql.Int, processId)
      .query<FieldRow>(`
        SELECT Processes.Id,
               Processes.Name AS pName,
               DetailsLayoutSections.Name AS secName,
               REPLACE(TRIM(DetailsLayoutFields.Name), ' ', '') AS fName,
               REPLACE(TRIM(FieldTypes.Name), ' ', '') AS fTypename,
               DetailsLayoutFields.SystemName AS sysName
        FROM Processes
        INNER JOIN DetailsLayouts ON Processes.Id = DetailsLayouts.ProcessId
        INNER JOIN DetailsLayoutSections ON DetailsLayouts.Id = DetailsLayoutSections.DetailsLayoutId
        INNER JOIN DetailsLayoutFields ON DetailsLayoutSections.Id = DetailsLayoutFields.SectionId
        INNER JOIN Fields ON Processes.Id = Fields.ProcessId AND DetailsLayoutFields.Name = Fields.Name
        INNER JOIN FieldTypes ON Fields.FieldTypeId = FieldTypes.Id
        INNER JOIN CrossRefRequredFieldStep
          ON Fields.Id = CrossRefRequredFieldStep.FieldId
         AND Fields.BranchId = CrossRefRequredFieldStep.BranchId
        WHERE (Processes.IsRemoved = 0)
          AND (CrossRefRequredFieldStep.AllowMultiple = 0)
        GROUP BY Processes.Id, Processes.Name, DetailsLayouts.Name, DetailsLayoutSections.Name,
                 DetailsLayoutFields.Name, Processes.IsRemoved, FieldTypes.Name, FieldTypes.Id,
                 DetailsLayoutFields.SystemName, Fields.IsRemoved
        HAVING (DetailsLayouts.Name = N'Default Details Layout')
           AND (Processes.Id = @processId)
           AND (DetailsLayoutSections.Name <> N'_hidden')
           AND (FieldTypes.Id = 6)
           AND (Fields.IsRemoved = 0)
      `);

    return res.recordset ?? [];
  };

   static async mcr(pool: ConnectionPool, processId: number): Promise<FieldRow[]> {
    const res: IResult<FieldRow> = await pool
      .request()
      .input('processId', sql.Int, processId)
      .query<FieldRow>(`
        SELECT Processes.Id,
               Processes.Name AS pName,
               DetailsLayoutSections.Name AS secName,
               REPLACE(TRIM(DetailsLayoutFields.Name), ' ', '') AS fName,
               REPLACE(TRIM(FieldTypes.Name), ' ', '') AS fTypename,
               DetailsLayoutFields.SystemName AS sysName
        FROM Processes
        INNER JOIN DetailsLayouts ON Processes.Id = DetailsLayouts.ProcessId
        INNER JOIN DetailsLayoutSections ON DetailsLayouts.Id = DetailsLayoutSections.DetailsLayoutId
        INNER JOIN DetailsLayoutFields ON DetailsLayoutSections.Id = DetailsLayoutFields.SectionId
        INNER JOIN Fields ON Processes.Id = Fields.ProcessId AND DetailsLayoutFields.Name = Fields.Name
        INNER JOIN FieldTypes ON Fields.FieldTypeId = FieldTypes.Id
        INNER JOIN CrossRefRequredFieldStep
          ON Fields.Id = CrossRefRequredFieldStep.FieldId
         AND Fields.BranchId = CrossRefRequredFieldStep.BranchId
        WHERE (Processes.IsRemoved = 0)
          AND (CrossRefRequredFieldStep.AllowMultiple = 1)
        GROUP BY Processes.Id, Processes.Name, DetailsLayouts.Name, DetailsLayoutSections.Name,
                 DetailsLayoutFields.Name, Processes.IsRemoved, FieldTypes.Name, FieldTypes.Id,
                 DetailsLayoutFields.SystemName, Fields.IsRemoved
        HAVING (DetailsLayouts.Name = N'Default Details Layout')
           AND (Processes.Id = @processId)
           AND (DetailsLayoutSections.Name <> N'_hidden')
           AND (FieldTypes.Id = 6)
           AND (Fields.IsRemoved = 0)
      `);

    return res.recordset ?? [];
  };

    static async rcr(pool: ConnectionPool, processId: number): Promise<FieldRow[]> {
    const res: IResult<FieldRow> = await pool
      .request()
      .input('processId', sql.Int, processId)
      .query<FieldRow>(`
        SELECT Processes.Id,
               Processes.Name AS pName,
               DetailsLayoutSections.Name AS secName,
               REPLACE(TRIM(DetailsLayoutFields.Name), ' ', '') AS fName,
               REPLACE(TRIM(FieldTypes.Name), ' ', '') AS fTypename,
               DetailsLayoutFields.SystemName AS sysName
        FROM Processes
        INNER JOIN DetailsLayouts ON Processes.Id = DetailsLayouts.ProcessId
        INNER JOIN DetailsLayoutSections ON DetailsLayouts.Id = DetailsLayoutSections.DetailsLayoutId
        INNER JOIN DetailsLayoutFields ON DetailsLayoutSections.Id = DetailsLayoutFields.SectionId
        INNER JOIN Fields ON Processes.Id = Fields.ProcessId AND DetailsLayoutFields.Name = Fields.Name
        INNER JOIN FieldTypes ON Fields.FieldTypeId = FieldTypes.Id
        WHERE (Processes.IsRemoved = 0)
        GROUP BY Processes.Id, Processes.Name, DetailsLayouts.Name, DetailsLayoutSections.Name,
                 DetailsLayoutFields.Name, Processes.IsRemoved, FieldTypes.Name, FieldTypes.Id,
                 DetailsLayoutFields.SystemName, Fields.IsRemoved
        HAVING (DetailsLayouts.Name = N'Default Details Layout')
           AND (Processes.Id = @processId)
           AND (DetailsLayoutSections.Name <> N'_hidden')
           AND (FieldTypes.Id = 9)
           AND (Fields.IsRemoved = 0)
      `);

    return res.recordset ?? [];
  };

  
  // static async commands(pool: ConnectionPool, processId: number) { ... }
  // static async reports(pool: ConnectionPool, processId: number) { ... }
  // static async actions(pool: ConnectionPool, processId: number) { ... }
};
