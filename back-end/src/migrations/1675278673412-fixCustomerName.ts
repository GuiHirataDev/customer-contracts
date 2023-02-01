import { MigrationInterface, QueryRunner } from "typeorm";

export class fixCustomerName1675278673412 implements MigrationInterface {
    name = 'fixCustomerName1675278673412'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_9be8cd672e452c894bf84384a31"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "costumerId" TO "customerId"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_f418137d00d8b5a598400bbf57a" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_f418137d00d8b5a598400bbf57a"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "customerId" TO "costumerId"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_9be8cd672e452c894bf84384a31" FOREIGN KEY ("costumerId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
