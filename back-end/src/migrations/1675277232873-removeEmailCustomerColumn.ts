import { MigrationInterface, QueryRunner } from "typeorm";

export class removeEmailCustomerColumn1675277232873 implements MigrationInterface {
    name = 'removeEmailCustomerColumn1675277232873'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "email_customer"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "email_customer" character varying(120) NOT NULL`);
    }

}
