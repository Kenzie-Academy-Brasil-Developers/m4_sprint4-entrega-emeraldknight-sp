CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS products (
	"id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "name" VARCHAR(100) NOT NULL,
  "price" INTEGER NOT NULL,
  "category_id" INTEGER,
  FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE
);
