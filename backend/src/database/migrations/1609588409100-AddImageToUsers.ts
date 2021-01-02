import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddImageToUsers1609588409100 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.addColumn('users', new TableColumn({
      name: 'photo',
      type: 'varchar',
      isNullable: true,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropColumn('users', 'photo');
  }

}
