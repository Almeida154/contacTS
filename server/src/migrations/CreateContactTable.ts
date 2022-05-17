import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateContactTable implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'contact',
        columns: [
          { name: 'id', type: 'uuid' },
          { name: 'firstName', type: 'varchar' },
          { name: 'lastName', type: 'varchar' },
          {
            name: 'cpf',
            type: 'varchar',
            isUnique: true,
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contact');
  }
}
