import db from "../../database";

const productListService = () => {
  const { products } = db;

  if (products.length === 0) {
    throw new Error ("Products not found.");
  }

  return products;
}

export default productListService;