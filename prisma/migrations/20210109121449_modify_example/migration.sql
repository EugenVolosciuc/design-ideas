/*
  Warnings:

  - Added the required column `url` to the `Example` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Example` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Example" ADD COLUMN     "url" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
