/*
  Warnings:

  - Added the required column `techstack` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "techstack" TEXT NOT NULL;
