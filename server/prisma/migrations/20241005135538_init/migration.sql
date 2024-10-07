/*
  Warnings:

  - You are about to drop the column `EndDate` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `projectName` on the `Project` table. All the data in the column will be lost.
  - Added the required column `name` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Attachment" ALTER COLUMN "fileName" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "EndDate",
DROP COLUMN "projectName",
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "name" TEXT NOT NULL;
