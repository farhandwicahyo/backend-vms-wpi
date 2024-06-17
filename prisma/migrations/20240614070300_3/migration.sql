/*
  Warnings:

  - You are about to drop the column `id_status` on the `user_penawaran` table. All the data in the column will be lost.
  - You are about to drop the column `company_name` on the `user_product` table. All the data in the column will be lost.
  - You are about to drop the column `nama_perusahaan` on the `user_product` table. All the data in the column will be lost.
  - Added the required column `id_status` to the `User_Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_status_penawaran` to the `User_Penawaran` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_status_proses_penawaran` to the `User_Penawaran` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user_penawaran` DROP FOREIGN KEY `User_Penawaran_id_status_fkey`;

-- AlterTable
ALTER TABLE `user_document` ADD COLUMN `id_status` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user_penawaran` DROP COLUMN `id_status`,
    ADD COLUMN `id_status_penawaran` INTEGER NOT NULL,
    ADD COLUMN `id_status_proses_penawaran` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user_product` DROP COLUMN `company_name`,
    DROP COLUMN `nama_perusahaan`;

-- AddForeignKey
ALTER TABLE `User_Document` ADD CONSTRAINT `User_Document_id_status_fkey` FOREIGN KEY (`id_status`) REFERENCES `mst_status`(`id_status`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Penawaran` ADD CONSTRAINT `User_Penawaran_id_status_proses_penawaran_fkey` FOREIGN KEY (`id_status_proses_penawaran`) REFERENCES `mst_status`(`id_status`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Penawaran` ADD CONSTRAINT `User_Penawaran_id_status_penawaran_fkey` FOREIGN KEY (`id_status_penawaran`) REFERENCES `mst_status`(`id_status`) ON DELETE RESTRICT ON UPDATE CASCADE;
