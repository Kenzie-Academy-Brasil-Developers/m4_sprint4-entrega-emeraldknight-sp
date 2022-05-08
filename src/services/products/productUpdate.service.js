import db from "../../database";

const productUpdateService = async ({ id, name, price, category_id }) => {
  let { products } = db;

  const productID = await products.find((product) => product.id === id);

  if (productID === undefined) {
    throw new Error ("Product not found.");
  };

  const productUpdated = {
    id: id, 
    name: name,
    price: price,
    category_id: category_id
  };

  products.splice(productID, 1, productUpdated);

  const message = {
    message: "Product updated",
    product: productUpdated
  };

  return message;
}

export default productUpdateService;