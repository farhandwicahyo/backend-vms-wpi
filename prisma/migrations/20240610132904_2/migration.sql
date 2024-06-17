/*
  Warnings:

  - You are about to drop the column `nama_jenis_sertifikasi` on the `mst_jenis_sertifikasi` table. All the data in the column will be lost.
  - You are about to drop the column `kotaId` on the `mst_provinsi` table. All the data in the column will be lost.
  - You are about to drop the column `nama_document` on the `mst_satuan` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `JabatanId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `statusId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `dtl_document` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dtl_draft_kontrak` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dtl_history` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dtl_penawaran` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dtl_pengalaman` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dtl_product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dtl_sertifikasi` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mst_jabatan` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[npwp]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_status]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nama_sertifikasi` to the `mst_jenis_sertifikasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_provinsi` to the `mst_kota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_satuan` to the `mst_satuan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_role` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `dtl_document` DROP FOREIGN KEY `dtl_document_userId_fkey`;

-- DropForeignKey
ALTER TABLE `dtl_draft_kontrak` DROP FOREIGN KEY `dtl_draft_kontrak_penawaranId_fkey`;

-- DropForeignKey
ALTER TABLE `dtl_draft_kontrak` DROP FOREIGN KEY `dtl_draft_kontrak_userId_fkey`;

-- DropForeignKey
ALTER TABLE `dtl_history` DROP FOREIGN KEY `dtl_history_statusId_fkey`;

-- DropForeignKey
ALTER TABLE `dtl_history` DROP FOREIGN KEY `dtl_history_userId_fkey`;

-- DropForeignKey
ALTER TABLE `dtl_penawaran` DROP FOREIGN KEY `dtl_penawaran_statusId_fkey`;

-- DropForeignKey
ALTER TABLE `dtl_penawaran` DROP FOREIGN KEY `dtl_penawaran_userId_fkey`;

-- DropForeignKey
ALTER TABLE `dtl_pengalaman` DROP FOREIGN KEY `dtl_pengalaman_kursId_fkey`;

-- DropForeignKey
ALTER TABLE `dtl_pengalaman` DROP FOREIGN KEY `dtl_pengalaman_userId_fkey`;

-- DropForeignKey
ALTER TABLE `dtl_product` DROP FOREIGN KEY `dtl_product_userId_fkey`;

-- DropForeignKey
ALTER TABLE `dtl_sertifikasi` DROP FOREIGN KEY `dtl_sertifikasi_userId_fkey`;

-- DropForeignKey
ALTER TABLE `mst_provinsi` DROP FOREIGN KEY `mst_provinsi_kotaId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_JabatanId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_statusId_fkey`;

-- AlterTable
ALTER TABLE `mst_jenis_sertifikasi` DROP COLUMN `nama_jenis_sertifikasi`,
    ADD COLUMN `nama_sertifikasi` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `mst_kota` ADD COLUMN `id_provinsi` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `mst_provinsi` DROP COLUMN `kotaId`;

-- AlterTable
ALTER TABLE `mst_satuan` DROP COLUMN `nama_document`,
    ADD COLUMN `nama_satuan` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `mst_status` MODIFY `keterangan` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `JabatanId`,
    DROP COLUMN `id`,
    DROP COLUMN `roleId`,
    DROP COLUMN `statusId`,
    ADD COLUMN `accessToken` VARCHAR(1000) NULL,
    ADD COLUMN `id_role` INTEGER NOT NULL,
    ADD COLUMN `id_status` INTEGER NULL,
    ADD COLUMN `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `npwp` VARCHAR(191) NULL,
    ADD COLUMN `refreshToken` VARCHAR(1000) NULL,
    MODIFY `nip` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id_user`);

-- DropTable
DROP TABLE `dtl_document`;

-- DropTable
DROP TABLE `dtl_draft_kontrak`;

-- DropTable
DROP TABLE `dtl_history`;

-- DropTable
DROP TABLE `dtl_penawaran`;

-- DropTable
DROP TABLE `dtl_pengalaman`;

-- DropTable
DROP TABLE `dtl_product`;

-- DropTable
DROP TABLE `dtl_sertifikasi`;

-- DropTable
DROP TABLE `mst_jabatan`;

-- CreateTable
CREATE TABLE `User_Document` (
    `id_document` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `nama_document` VARCHAR(191) NOT NULL,
    `id_jenis_document` INTEGER NOT NULL,
    `tanggal_berlaku` DATETIME(3) NOT NULL,
    `tanggal_berakhir` DATETIME(3) NOT NULL,
    `file` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_document`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_Sertifikasi` (
    `id_sertifikasi` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `nama_sertifikasi` VARCHAR(191) NOT NULL,
    `id_jenis_sertifikasi` INTEGER NOT NULL,
    `tanggal_berlaku` DATE NOT NULL,
    `tanggal_berakhir` DATE NOT NULL,
    `file` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_sertifikasi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_Product` (
    `id_product` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `nama_perusahaan` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `id_kurs` INTEGER NOT NULL,
    `stock` INTEGER NOT NULL,
    `volume` VARCHAR(191) NOT NULL,
    `id_satuan` INTEGER NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `item_image` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `id_jenis_product` INTEGER NOT NULL,
    `id_provisi` INTEGER NOT NULL,
    `id_kota` INTEGER NOT NULL,
    `company_name` VARCHAR(191) NOT NULL,
    `company_category` VARCHAR(191) NOT NULL,
    `storage_type` VARCHAR(191) NOT NULL,
    `packaging` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_product`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_Pengalaman` (
    `id_pengalaman` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `nama_klien` VARCHAR(191) NOT NULL,
    `nama_proyek` VARCHAR(191) NOT NULL,
    `id_kurs` INTEGER NOT NULL,
    `nilai_proyek` DECIMAL(65, 30) NOT NULL,
    `no_kontrak` VARCHAR(191) NOT NULL,
    `kontak_klien` VARCHAR(191) NOT NULL,
    `tanggal_mulai` DATE NOT NULL,
    `tanggal_selesai` DATE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_pengalaman`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_Penawaran` (
    `id_penawaran` INTEGER NOT NULL AUTO_INCREMENT,
    `no_penawaran` VARCHAR(191) NOT NULL,
    `id_user` INTEGER NOT NULL,
    `id_status` INTEGER NOT NULL,
    `id_product` INTEGER NOT NULL,
    `tanggal_dibuat_penawaran` DATETIME(3) NOT NULL,
    `tanggal_mulai_penawaran` DATETIME(3) NOT NULL,
    `tanggal_berakhir_penawaran` DATETIME(3) NOT NULL,
    `Terms_of_Payment` VARCHAR(191) NOT NULL,
    `Terms_of_Delivery` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_Penawaran_no_penawaran_key`(`no_penawaran`),
    PRIMARY KEY (`id_penawaran`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_PO` (
    `id_po` INTEGER NOT NULL AUTO_INCREMENT,
    `no_po` VARCHAR(191) NOT NULL,
    `no_penawaran` VARCHAR(191) NOT NULL,
    `id_user` INTEGER NOT NULL,
    `id_product` INTEGER NOT NULL,
    `tanggal_dibuat_po` DATETIME(3) NOT NULL,
    `tanggal_mulai_po` DATETIME(3) NOT NULL,
    `tanggal_berakhir_po` DATETIME(3) NOT NULL,
    `Terms_of_Payment` VARCHAR(191) NOT NULL,
    `Terms_of_Delivery` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_PO_no_po_key`(`no_po`),
    UNIQUE INDEX `User_PO_no_penawaran_key`(`no_penawaran`),
    PRIMARY KEY (`id_po`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_History` (
    `id_history` INTEGER NOT NULL AUTO_INCREMENT,
    `id_status` INTEGER NOT NULL,
    `id_user` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_history`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_jenis_product` (
    `id_jenis_product` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_jenis_product` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `mst_jenis_product_id_jenis_product_key`(`id_jenis_product`),
    PRIMARY KEY (`id_jenis_product`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_npwp_key` ON `User`(`npwp`);

-- CreateIndex
CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `User_id_status_key` ON `User`(`id_status`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_id_role_fkey` FOREIGN KEY (`id_role`) REFERENCES `mst_role`(`id_role`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_id_status_fkey` FOREIGN KEY (`id_status`) REFERENCES `mst_status`(`id_status`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Document` ADD CONSTRAINT `User_Document_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Document` ADD CONSTRAINT `User_Document_id_jenis_document_fkey` FOREIGN KEY (`id_jenis_document`) REFERENCES `mst_jenis_document`(`id_jenis_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Sertifikasi` ADD CONSTRAINT `User_Sertifikasi_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Sertifikasi` ADD CONSTRAINT `User_Sertifikasi_id_jenis_sertifikasi_fkey` FOREIGN KEY (`id_jenis_sertifikasi`) REFERENCES `mst_jenis_sertifikasi`(`id_jenis_sertifikasi`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Product` ADD CONSTRAINT `User_Product_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Product` ADD CONSTRAINT `User_Product_id_kurs_fkey` FOREIGN KEY (`id_kurs`) REFERENCES `mst_kurs`(`id_kurs`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Product` ADD CONSTRAINT `User_Product_id_satuan_fkey` FOREIGN KEY (`id_satuan`) REFERENCES `mst_satuan`(`id_satuan`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Product` ADD CONSTRAINT `User_Product_id_jenis_product_fkey` FOREIGN KEY (`id_jenis_product`) REFERENCES `mst_jenis_product`(`id_jenis_product`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Product` ADD CONSTRAINT `User_Product_id_provisi_fkey` FOREIGN KEY (`id_provisi`) REFERENCES `mst_provinsi`(`id_provinsi`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Product` ADD CONSTRAINT `User_Product_id_kota_fkey` FOREIGN KEY (`id_kota`) REFERENCES `mst_kota`(`id_kota`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Pengalaman` ADD CONSTRAINT `User_Pengalaman_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Pengalaman` ADD CONSTRAINT `User_Pengalaman_id_kurs_fkey` FOREIGN KEY (`id_kurs`) REFERENCES `mst_kurs`(`id_kurs`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Penawaran` ADD CONSTRAINT `User_Penawaran_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Penawaran` ADD CONSTRAINT `User_Penawaran_id_status_fkey` FOREIGN KEY (`id_status`) REFERENCES `mst_status`(`id_status`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Penawaran` ADD CONSTRAINT `User_Penawaran_id_product_fkey` FOREIGN KEY (`id_product`) REFERENCES `User_Product`(`id_product`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_PO` ADD CONSTRAINT `User_PO_no_penawaran_fkey` FOREIGN KEY (`no_penawaran`) REFERENCES `User_Penawaran`(`no_penawaran`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_PO` ADD CONSTRAINT `User_PO_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_PO` ADD CONSTRAINT `User_PO_id_product_fkey` FOREIGN KEY (`id_product`) REFERENCES `User_Product`(`id_product`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_History` ADD CONSTRAINT `User_History_id_status_fkey` FOREIGN KEY (`id_status`) REFERENCES `mst_status`(`id_status`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_History` ADD CONSTRAINT `User_History_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_kota` ADD CONSTRAINT `mst_kota_id_provinsi_fkey` FOREIGN KEY (`id_provinsi`) REFERENCES `mst_provinsi`(`id_provinsi`) ON DELETE RESTRICT ON UPDATE CASCADE;
