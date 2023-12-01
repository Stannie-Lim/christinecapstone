/*
  Warnings:

  - Added the required column `Avatar` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Email_Validated` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Locale` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Password_Hash` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Phone_Validated` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Platform` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Platform_User` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Role` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "Avatar" TEXT NOT NULL,
ADD COLUMN     "Email_Validated" BOOLEAN NOT NULL,
ADD COLUMN     "Locale" TEXT NOT NULL,
ADD COLUMN     "Password_Hash" TEXT NOT NULL,
ADD COLUMN     "Phone_Validated" BOOLEAN NOT NULL,
ADD COLUMN     "Platform" TEXT NOT NULL,
ADD COLUMN     "Platform_User" TEXT NOT NULL,
ADD COLUMN     "Role" TEXT NOT NULL;
