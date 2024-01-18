/*
  Warnings:

  - You are about to drop the `emais` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "emais";

-- CreateTable
CREATE TABLE "email" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "email_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "email_email_key" ON "email"("email");
