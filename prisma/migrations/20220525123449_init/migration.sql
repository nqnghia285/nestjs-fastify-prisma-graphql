-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'STAFF');

-- CreateEnum
CREATE TYPE "OS" AS ENUM ('FREEDOS', 'WINDOWS', 'MACOS', 'LINUX', 'ANDROID');

-- CreateEnum
CREATE TYPE "Rank" AS ENUM ('ONE', 'TWO', 'THREE', 'FOUR', 'FIVE');

-- CreateEnum
CREATE TYPE "MimeType" AS ENUM ('gif', 'jpeg', 'pipeg', 'png', 'svg');

-- CreateTable
CREATE TABLE "Person" (
    "id" UUID NOT NULL,
    "fullname" VARCHAR(60) NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT E'MALE',
    "phone" VARCHAR(15) NOT NULL,
    "email" VARCHAR(30),
    "address" VARCHAR(255) NOT NULL DEFAULT E'None',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "password" CHAR(60) NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'STAFF',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Laptop" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL DEFAULT E'None',
    "brand" VARCHAR(255) NOT NULL DEFAULT E'None',
    "model" VARCHAR(255) NOT NULL DEFAULT E'None',
    "material" VARCHAR(255) NOT NULL DEFAULT E'None',
    "display" VARCHAR(255) NOT NULL DEFAULT E'None',
    "cpu" VARCHAR(255) NOT NULL DEFAULT E'None',
    "ram" VARCHAR(255) NOT NULL DEFAULT E'None',
    "graphic_card" VARCHAR(255) NOT NULL DEFAULT E'None',
    "ports" VARCHAR(255) NOT NULL DEFAULT E'None',
    "wifi" VARCHAR(255) NOT NULL DEFAULT E'None',
    "storage" VARCHAR(255) NOT NULL DEFAULT E'None',
    "webcam" VARCHAR(255) NOT NULL DEFAULT E'None',
    "fans" VARCHAR(255) NOT NULL DEFAULT E'None',
    "speakers" VARCHAR(255) NOT NULL DEFAULT E'None',
    "keyboard" VARCHAR(255) NOT NULL DEFAULT E'None',
    "security" VARCHAR(255) NOT NULL DEFAULT E'None',
    "adapter" VARCHAR(255) NOT NULL DEFAULT E'None',
    "battery" VARCHAR(255) NOT NULL DEFAULT E'None',
    "special_features" VARCHAR(255) NOT NULL DEFAULT E'None',
    "dimensions_and_weight" VARCHAR(255) NOT NULL DEFAULT E'None',
    "origin" VARCHAR(255) NOT NULL DEFAULT E'None',
    "release_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sold" INTEGER NOT NULL DEFAULT 0,
    "stop_selling" BOOLEAN NOT NULL DEFAULT false,
    "os" "OS" NOT NULL DEFAULT E'WINDOWS',
    "price_map_id" INTEGER,
    "default_image_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Laptop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "rank" "Rank" NOT NULL DEFAULT E'FIVE',
    "content" VARCHAR(400) NOT NULL,
    "author_id" UUID NOT NULL,
    "is_staff" BOOLEAN NOT NULL DEFAULT false,
    "laptop_id" INTEGER NOT NULL,
    "comment_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PriceMap" (
    "id" SERIAL NOT NULL,
    "price" MONEY NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PriceMap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Discount" (
    "id" SERIAL NOT NULL,
    "value" REAL NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Discount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchase" (
    "id" SERIAL NOT NULL,
    "customer_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Passage" (
    "id" SERIAL NOT NULL,
    "header" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "post_id" INTEGER NOT NULL,

    CONSTRAINT "Passage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "author_id" UUID NOT NULL,
    "default_image_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "mime_type" "MimeType" NOT NULL DEFAULT E'jpeg',
    "data" BYTEA NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LaptopToPurchase" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_LaptopToPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_LaptopToVideo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DiscountToLaptop" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PostToVideo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ImageToLaptop" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ImageToPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_phone_key" ON "Person"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "PriceMap_price_key" ON "PriceMap"("price");

-- CreateIndex
CREATE UNIQUE INDEX "Discount_value_key" ON "Discount"("value");

-- CreateIndex
CREATE UNIQUE INDEX "_LaptopToPurchase_AB_unique" ON "_LaptopToPurchase"("A", "B");

-- CreateIndex
CREATE INDEX "_LaptopToPurchase_B_index" ON "_LaptopToPurchase"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LaptopToPost_AB_unique" ON "_LaptopToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_LaptopToPost_B_index" ON "_LaptopToPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LaptopToVideo_AB_unique" ON "_LaptopToVideo"("A", "B");

-- CreateIndex
CREATE INDEX "_LaptopToVideo_B_index" ON "_LaptopToVideo"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DiscountToLaptop_AB_unique" ON "_DiscountToLaptop"("A", "B");

-- CreateIndex
CREATE INDEX "_DiscountToLaptop_B_index" ON "_DiscountToLaptop"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostToVideo_AB_unique" ON "_PostToVideo"("A", "B");

-- CreateIndex
CREATE INDEX "_PostToVideo_B_index" ON "_PostToVideo"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ImageToLaptop_AB_unique" ON "_ImageToLaptop"("A", "B");

-- CreateIndex
CREATE INDEX "_ImageToLaptop_B_index" ON "_ImageToLaptop"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ImageToPost_AB_unique" ON "_ImageToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_ImageToPost_B_index" ON "_ImageToPost"("B");

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_id_fkey" FOREIGN KEY ("id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_fkey" FOREIGN KEY ("id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laptop" ADD CONSTRAINT "Laptop_price_map_id_fkey" FOREIGN KEY ("price_map_id") REFERENCES "PriceMap"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laptop" ADD CONSTRAINT "Laptop_default_image_id_fkey" FOREIGN KEY ("default_image_id") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_laptop_id_fkey" FOREIGN KEY ("laptop_id") REFERENCES "Laptop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passage" ADD CONSTRAINT "Passage_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_default_image_id_fkey" FOREIGN KEY ("default_image_id") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LaptopToPurchase" ADD CONSTRAINT "_LaptopToPurchase_A_fkey" FOREIGN KEY ("A") REFERENCES "Laptop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LaptopToPurchase" ADD CONSTRAINT "_LaptopToPurchase_B_fkey" FOREIGN KEY ("B") REFERENCES "Purchase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LaptopToPost" ADD CONSTRAINT "_LaptopToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Laptop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LaptopToPost" ADD CONSTRAINT "_LaptopToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LaptopToVideo" ADD CONSTRAINT "_LaptopToVideo_A_fkey" FOREIGN KEY ("A") REFERENCES "Laptop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LaptopToVideo" ADD CONSTRAINT "_LaptopToVideo_B_fkey" FOREIGN KEY ("B") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiscountToLaptop" ADD CONSTRAINT "_DiscountToLaptop_A_fkey" FOREIGN KEY ("A") REFERENCES "Discount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiscountToLaptop" ADD CONSTRAINT "_DiscountToLaptop_B_fkey" FOREIGN KEY ("B") REFERENCES "Laptop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToVideo" ADD CONSTRAINT "_PostToVideo_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToVideo" ADD CONSTRAINT "_PostToVideo_B_fkey" FOREIGN KEY ("B") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImageToLaptop" ADD CONSTRAINT "_ImageToLaptop_A_fkey" FOREIGN KEY ("A") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImageToLaptop" ADD CONSTRAINT "_ImageToLaptop_B_fkey" FOREIGN KEY ("B") REFERENCES "Laptop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImageToPost" ADD CONSTRAINT "_ImageToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImageToPost" ADD CONSTRAINT "_ImageToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
