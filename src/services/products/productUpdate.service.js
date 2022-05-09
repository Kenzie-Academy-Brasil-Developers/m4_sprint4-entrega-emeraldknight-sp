// import db from "../../database";

import database from "../../database";

const productUpdateService = async ({ id, name, price, category_id }) => {

  try {
    const res = await database.query(
      "SELECT * FROM products;"
    );

    const product = res.rows.find((row) => row.id === id);

    if (!product) {
      throw new Error("Product not found.");
    }

    const productUpdated = {
      id,
      name: name,
      price: price,
      category_id: category_id
    }

    const message = {
      message: "Product updated",
      product: productUpdated
    };
  
    return message;
  } catch (err) {
    throw new Error(err)
  }

}

export default productUpdateService;

// let { products } = db;

// const productID = await products.find((product) => product.id === id);

// if (productID === undefined) {
//   throw new Error ("Product not found.");
// };

// const productUpdated = {
//   id: id, 
//   name: name,
//   price: price,
//   category_id: category_id
// };

// products.splice(productID, 1, productUpdated);