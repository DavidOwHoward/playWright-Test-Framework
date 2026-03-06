import sql, { config, ConnectionPool } from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

export class BaseSql {
    static getConfig(): config {
    const { sqlUserName, sqlPassword, sqlServer, sqlDatabase } = process.env;

    if (!sqlServer) throw new Error('sqlServer is not set');    

    return {
      user: sqlUserName,
      password: sqlPassword,
      server: sqlServer,
      database: sqlDatabase,
      options: {
        encrypt: true,
        trustServerCertificate: true,
        
      },
    };
  };

  static async connect(): Promise<ConnectionPool> {
    return sql.connect(this.getConfig());
  };

};