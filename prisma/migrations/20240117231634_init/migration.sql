/*
  Warnings:

  - You are about to drop the `email` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "email";

-- CreateTable
CREATE TABLE "emais" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "emais_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "emais_email_key" ON "emais"("email");
