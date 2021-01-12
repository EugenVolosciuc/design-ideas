/*
  Warnings:

  - Added the required column `description` to the `Idea` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Idea" ADD COLUMN     "description" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Example" (
"id" SERIAL,
    "ideaId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Example" ADD FOREIGN KEY("ideaId")REFERENCES "Idea"("id") ON DELETE CASCADE ON UPDATE CASCADE;
