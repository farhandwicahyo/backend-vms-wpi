-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `nip` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `nama_perusahaan` VARCHAR(191) NOT NULL,
    `nama_pic` VARCHAR(191) NOT NULL,
    `no_telephone` VARCHAR(191) NOT NULL,
    `roleId` INTEGER NOT NULL,
    `JabatanId` INTEGER NULL,
    `statusId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_nip_key`(`nip`),
    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_statusId_key`(`statusId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_role` (
    `id_role` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_role` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_role`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_jabatan` (
    `id_jabatan` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_jabatan` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_jabatan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_jenis_document` (
    `id_jenis_document` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_document` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_jenis_document`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_satuan` (
    `id_satuan` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_document` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_satuan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_jenis_sertifikasi` (
    `id_jenis_sertifikasi` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_jenis_sertifikasi` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_jenis_sertifikasi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_kurs` (
    `id_kurs` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kurs` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `mst_kurs_id_kurs_key`(`id_kurs`),
    PRIMARY KEY (`id_kurs`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_status` (
    `id_status` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_status` VARCHAR(191) NOT NULL,
    `nama_status` VARCHAR(191) NOT NULL,
    `group_status` VARCHAR(191) NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `mst_status_kode_status_key`(`kode_status`),
    PRIMARY KEY (`id_status`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_provinsi` (
    `id_provinsi` INTEGER NOT NULL AUTO_INCREMENT,
    `kotaId` INTEGER NOT NULL,
    `nama_provinsi` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `mst_provinsi_id_provinsi_key`(`id_provinsi`),
    UNIQUE INDEX `mst_provinsi_kotaId_key`(`kotaId`),
    PRIMARY KEY (`id_provinsi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_kota` (
    `id_kota` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kota` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `mst_kota_id_kota_key`(`id_kota`),
    PRIMARY KEY (`id_kota`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dtl_document` (
    `id_document` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `nama_document` VARCHAR(191) NOT NULL,
    `jenis_document` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `dtl_document_userId_key`(`userId`),
    PRIMARY KEY (`id_document`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dtl_sertifikasi` (
    `id_sertifikasi` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `nama_sertifikasi` VARCHAR(191) NOT NULL,
    `jenis_sertifikasi` VARCHAR(191) NOT NULL,
    `tanggal_berlaku` DATE NOT NULL,
    `tanggal_berakhir` DATE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `dtl_sertifikasi_userId_key`(`userId`),
    PRIMARY KEY (`id_sertifikasi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dtl_product` (
    `id_product` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `nama_perusahaan` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `stock` INTEGER NOT NULL,
    `volume` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `item_image` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `categories` INTEGER NOT NULL,
    `provinces` INTEGER NOT NULL,
    `cities` INTEGER NOT NULL,
    `company_name` VARCHAR(191) NOT NULL,
    `company_category` VARCHAR(191) NOT NULL,
    `storage_type` VARCHAR(191) NOT NULL,
    `packaging` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `dtl_product_userId_key`(`userId`),
    PRIMARY KEY (`id_product`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dtl_pengalaman` (
    `id_pengalaman` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `nama_klien` VARCHAR(191) NOT NULL,
    `nama_proyek` VARCHAR(191) NOT NULL,
    `kursId` INTEGER NOT NULL,
    `nilai_proyek` DECIMAL(65, 30) NOT NULL,
    `no_kontrak` VARCHAR(191) NOT NULL,
    `kontak_klien` VARCHAR(191) NOT NULL,
    `tanggal_mulai` DATE NOT NULL,
    `tanggal_selesai` DATE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `dtl_pengalaman_userId_key`(`userId`),
    UNIQUE INDEX `dtl_pengalaman_kursId_key`(`kursId`),
    PRIMARY KEY (`id_pengalaman`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dtl_penawaran` (
    `id_penawaran` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_penawaran` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `statusId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `dtl_penawaran_userId_key`(`userId`),
    UNIQUE INDEX `dtl_penawaran_statusId_key`(`statusId`),
    PRIMARY KEY (`id_penawaran`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dtl_draft_kontrak` (
    `id_draft_kontrak` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kontrak` VARCHAR(191) NOT NULL,
    `nama_buyer` VARCHAR(191) NOT NULL,
    `pic_buyer` VARCHAR(191) NOT NULL,
    `no_telp_buyer` VARCHAR(191) NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,
    `penawaranId` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `dtl_draft_kontrak_penawaranId_key`(`penawaranId`),
    PRIMARY KEY (`id_draft_kontrak`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dtl_history` (
    `id_history` INTEGER NOT NULL AUTO_INCREMENT,
    `statusId` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `dtl_history_statusId_key`(`statusId`),
    PRIMARY KEY (`id_history`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `mst_role`(`id_role`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_JabatanId_fkey` FOREIGN KEY (`JabatanId`) REFERENCES `mst_jabatan`(`id_jabatan`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `mst_status`(`id_status`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_provinsi` ADD CONSTRAINT `mst_provinsi_kotaId_fkey` FOREIGN KEY (`kotaId`) REFERENCES `mst_kota`(`id_kota`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dtl_document` ADD CONSTRAINT `dtl_document_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dtl_sertifikasi` ADD CONSTRAINT `dtl_sertifikasi_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dtl_product` ADD CONSTRAINT `dtl_product_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dtl_pengalaman` ADD CONSTRAINT `dtl_pengalaman_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dtl_pengalaman` ADD CONSTRAINT `dtl_pengalaman_kursId_fkey` FOREIGN KEY (`kursId`) REFERENCES `mst_kurs`(`id_kurs`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dtl_penawaran` ADD CONSTRAINT `dtl_penawaran_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dtl_penawaran` ADD CONSTRAINT `dtl_penawaran_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `mst_status`(`id_status`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dtl_draft_kontrak` ADD CONSTRAINT `dtl_draft_kontrak_penawaranId_fkey` FOREIGN KEY (`penawaranId`) REFERENCES `dtl_penawaran`(`id_penawaran`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dtl_draft_kontrak` ADD CONSTRAINT `dtl_draft_kontrak_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dtl_history` ADD CONSTRAINT `dtl_history_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `mst_status`(`id_status`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dtl_history` ADD CONSTRAINT `dtl_history_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
