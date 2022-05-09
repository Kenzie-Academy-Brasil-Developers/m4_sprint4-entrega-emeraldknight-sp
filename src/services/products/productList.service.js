// import db from "../../database";
import database from "../../database";

const productListService = async () => {
  try {
    const res = await database.query(
      "SELECT * FROM products;"
    );
    
    const products = res.rows.map((row) => {
      const { id, name, price, category_id } = row;

      return {
        id,
        name,
        price,
        category_id
      }
    });

    return products;
    
  } catch (err) {
    throw new Error(err);
  }

}

export default productListService;

// const { products } = db;

// if (products.length === 0) {
//   throw new Error ("Products not found.");
// };