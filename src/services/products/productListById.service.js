// import db from "../../database";

import database from "../../database";

const productListByIDService = async ({ id }) => {
  try {
    const res = await database.query(
      "SELECT * FROM products;"
    );

    const productListedByID = res.rows.find((row) => row.id === id)

    if (!productListedByID) {
      throw new Error("Product not found.");
    }

    return productListedByID

  } catch (err) {
    throw new Error(err)
  }
}

export default productListByIDService;

// const { products } = db;
// const productID = products.find((product) => product.id === id);

// if (productID === -1) {
//   throw new Error ("Category not found.");
// };

// return productID;