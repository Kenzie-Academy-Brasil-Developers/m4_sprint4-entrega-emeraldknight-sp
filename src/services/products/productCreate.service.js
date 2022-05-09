// import db from "../../database";

import database from "../../database";

const productCreateService = async ({ name, price, category_id }) => {

  try {

    const res = await database.query(
      "INSERT INTO products(name, price, category_id) VALUES ($1, $2, $3) RETURNING *;",
      [name, price, category_id]
    );

    const [productCreated] = res.rows;

    const message = {
      message: "Product created with success.",
      product: productCreated
    }
  
    return message;

  } catch (err) {
    throw new Error(err);
  }

}

export default productCreateService;

// const { products } = db;
// const productID = products.length.toString();
// const alreadyNameExists = products.findIndex((category) => category.name === name);

// if (alreadyNameExists !== -1) {
//   throw new Error ("Product already exists.");
// }

// const newProduct = {
//   id: productID,
//   name: name,
//   price: price,
//   category_id: category_id
// };

// products.push(newProduct);