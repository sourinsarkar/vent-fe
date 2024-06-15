/*
  Warnings:

  - The primary key for the `Ment` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Ment" DROP CONSTRAINT "Ment_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Ment_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Ment_id_seq";
