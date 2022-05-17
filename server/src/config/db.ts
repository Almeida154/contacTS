import { AppDataSource } from '../data-source';

export const dbConnection = async () => {
  AppDataSource.initialize().then(conn => {
    console.log(
      `📦 Connection with ${conn.options.database} database working`
    );
  });
};
