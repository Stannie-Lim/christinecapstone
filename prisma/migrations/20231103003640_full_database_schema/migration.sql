-- CreateTable
CREATE TABLE "order_Items" (
    "orders_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "products_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "Is_Discounted" BOOLEAN NOT NULL,
    "Discount_Value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "products_id" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "comment" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "parent_category" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "order_Items_orders_id_key" ON "order_Items"("orders_id");

-- CreateIndex
CREATE UNIQUE INDEX "order_Items_products_id_key" ON "order_Items"("products_id");

-- AddForeignKey
ALTER TABLE "order_Items" ADD CONSTRAINT "order_Items_orders_id_fkey" FOREIGN KEY ("orders_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_Items" ADD CONSTRAINT "order_Items_products_id_fkey" FOREIGN KEY ("products_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_products_id_fkey" FOREIGN KEY ("products_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
