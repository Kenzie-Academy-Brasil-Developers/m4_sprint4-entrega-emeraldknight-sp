import db from "../../database";

const productListByIDService = ({ id }) => {
  const { products } = db;
  const productID = products.find((product) => product.id === id);

  if (productID === -1) {
    throw new Error ("Category not found.");
  };

  return productID;
}

export default productListByIDService;