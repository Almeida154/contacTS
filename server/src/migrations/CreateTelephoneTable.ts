import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTelephoneTable implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'telephone',
        columns: [
          { name: 'id', type: 'uuid' },
          { name: 'number', type: 'varchar', isUnique: true },
          { name: 'contact_id', type: 'uuid' },
        ],
        foreignKeys: [
          {
            name: 'fk_contact_id',
            columnNames: ['contact_id'],
            referencedTableName: 'contact',
            referencedColumnNames: ['id'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contact');
  }
}
