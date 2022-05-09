// import db from "../../database";

import database from "../../database";

const productDeleteService = async ({ id }) => {
  
  try {

    const res = await database.query(
      "SELECT * FROM products;"
    )

    const productDeleted = res.rows.find((row) => row.id === id);

    if (!productDeleted) {
      throw new Error("Product not found.")
    }

    await database.query("DELETE FROM products WHERE id = $1;",
    [id]);

    const message = {
      message: "Product deleted with success.",
      product: productDeleted
    };
  
    return message;
  } catch (err) {
    throw new Error(err)
  }

}

export default productDeleteService;

// const productDeleted = db.products.find((product) => product.id === id);

// if (productDeleted === undefined) {
//   throw new Error  ("Product not found.");
// };

// db.products.splice(productDeleted, 1);