import db from "../../database";

const productDeleteService = ({ id }) => {
  let productID = db.products.findIndex((product) => product.id === id);

  if (productID === -1) {
    throw new Error  ("Product not found.");
  };

  db.products.splice(productID, 1);
}

export default productDeleteService;