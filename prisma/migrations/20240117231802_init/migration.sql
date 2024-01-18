/*
  Warnings:

  - You are about to drop the column `createdAt` on the `emais` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "emais_email_key";

-- AlterTable
ALTER TABLE "emais" DROP COLUMN "createdAt";
