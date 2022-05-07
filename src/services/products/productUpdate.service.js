import db from "../../database";

const productUpdateService = async ({ id, name, price, category_id }) => {
  let { products } = db;

  const productID = db.findIndex((product) => product.id === id);

  if (productID === -1) {
    throw new Error ("Product not found.");
  }

  const productUpdated = {
    id: id, 
    name: name,
    price: price,
    category_id: category_id
  }

  products.splice(productID, 1, productUpdated)

  return productUpdated;
}

export default productUpdateService;