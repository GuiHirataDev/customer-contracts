import { MigrationInterface, QueryRunner } from "typeorm";

export class createEmailCustomerColumn1675276366210 implements MigrationInterface {
    name = 'createEmailCustomerColumn1675276366210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "email_customer" character varying(120) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "email_customer"`);
    }

}
