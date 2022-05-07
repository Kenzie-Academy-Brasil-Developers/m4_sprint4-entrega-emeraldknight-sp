import { db } from "../../database";

const productCreateService = ({ name, price, category_id }) => {

  const { products } = db;
  const productID = products.length

  const newProduct = {
    id: productID,
    name: name,
    price: price,
    category_id: category_id
  }

  products.push(newProduct);

  return newProduct;
}

export default productCreateService;