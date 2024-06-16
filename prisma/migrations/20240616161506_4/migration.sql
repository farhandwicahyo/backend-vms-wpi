/*
  Warnings:

  - You are about to drop the column `id_provisi` on the `User_Product` table. All the data in the column will be lost.
  - Added the required column `id_provinsi` to the `User_Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `User_Product` DROP FOREIGN KEY `User_Product_id_provisi_fkey`;

-- AlterTable
ALTER TABLE `User_Product` DROP COLUMN `id_provisi`,
    ADD COLUMN `id_provinsi` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `User_Product` ADD CONSTRAINT `User_Product_id_provinsi_fkey` FOREIGN KEY (`id_provinsi`) REFERENCES `mst_provinsi`(`id_provinsi`) ON DELETE RESTRICT ON UPDATE CASCADE;
