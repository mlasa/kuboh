import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddInfoCPFToUsers1609587984147 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.addColumn('users', new TableColumn({
      name: 'cpf',
      type: 'varchar',
      isNullable: false,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropColumn('users', 'cpf');
  }

}
