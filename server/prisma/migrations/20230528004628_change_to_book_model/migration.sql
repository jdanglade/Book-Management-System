/*
  Warnings:

  - Made the column `updatedAt` on table `Books` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Books` MODIFY `updatedAt` TIMESTAMP(6) NOT NULL;
