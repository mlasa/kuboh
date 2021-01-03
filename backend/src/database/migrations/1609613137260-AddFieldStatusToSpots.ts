import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export default class AddFieldStatusToSpots1609613137260 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('spots', new TableColumn({
      name: 'status',
      type: 'varchar',
      isNullable: false,
      default: "'unavailable'"
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('spots', 'status');
  }

}
