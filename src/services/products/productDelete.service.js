import db from "../../database";

const productDeleteService = ({ id }) => {
  const productDeleted = db.products.find((product) => product.id === id);

  if (productDeleted === undefined) {
    throw new Error  ("Product not found.");
  };

  db.products.splice(productDeleted, 1);

  const message = {
    message: "Product deleted",
    product: productDeleted
  };

  return message;
}

export default productDeleteService;