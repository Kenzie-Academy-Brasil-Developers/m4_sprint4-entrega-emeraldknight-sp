import db from "../../database";

const productCreateService = ({ name, price, category_id }) => {

  const { products } = db;
  const productID = products.length;
  const alreadyNameExists = products.findIndex((category) => category.name === name);
  console.log("NAME", alreadyNameExists)


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