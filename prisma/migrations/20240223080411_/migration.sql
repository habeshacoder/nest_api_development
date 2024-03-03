/*
  Warnings:

  - Made the column `title` on table `BookMark` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `BookMark` required. This step will fail if there are existing NULL values in that column.
  - Made the column `link` on table `BookMark` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "BookMark" ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "link" SET NOT NULL;
