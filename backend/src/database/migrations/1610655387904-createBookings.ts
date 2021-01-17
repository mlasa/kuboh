import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from "typeorm";

export default class createBookings1610655387904 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'bookings',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'guest_id',
          type: 'uuid',
        },
        {
          name: 'spot_id',
          type: 'uuid',
        },
        {
          name: 'check_in',
          type: 'timestamp with time zone',
        },
        {
          name: 'check_out',
          type: 'timestamp with time zone',
        },
        {
          name: 'status',
          type: 'varchar',
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        },
      ]
    }));

    await queryRunner.createForeignKey(
      'bookings',
      new TableForeignKey({
        name: 'fkGuestId',
        columnNames: ['guest_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'bookings',
      new TableForeignKey({
        name: 'fkSpotId',
        columnNames: ['spot_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'spots',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('bookings');
  }

}
