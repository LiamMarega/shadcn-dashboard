/*
  Warnings:

  - The primary key for the `email` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "email" DROP CONSTRAINT "email_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "email_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "email_id_seq";
