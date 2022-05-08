import db from "../../database";

const productCreateService = ({ name, price, category_id }) => {

  const { products } = db;
  const productID = products.length.toString();
  const alreadyNameExists = products.findIndex((category) => category.name === name);

  if (alreadyNameExists !== -1) {
    throw new Error ("Product already exists.");
  }

  const newProduct = {
    id: productID,
    name: name,
    price: price,
    category_id: category_id
  };

  products.push(newProduct);

  return newProduct;
}

export default productCreateService;