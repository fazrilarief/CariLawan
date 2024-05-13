-- CreateTable
CREATE TABLE `Historys` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `editedAt` DATETIME(3) NOT NULL,
    `teamsId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Historys` ADD CONSTRAINT `Historys_teamsId_fkey` FOREIGN KEY (`teamsId`) REFERENCES `Teams`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
