// import db from "../../database";
import database from "../../database";

const productListByCategoryService = async ({ category_id }) => {
  try {

    const res = await database.query(
      "SELECT * FROM products INNER JOIN categories ON products.category_id = categories.id WHERE categories.id = $1;",
      [category_id]
    );

    if (!res.rows.length) {
      const resWithoutCategory = await database.query(
        "SELECT * FROM products INNER JOIN categories ON products.category_id = categories.id ORDER BY categories.id;",
      );

      const products = resWithoutCategory.rows

      return   [{ category: products }] ;
    }
    
    const products = res.rows

    return { category: products };
    
  } catch (err) {
    throw new Error(err);
  }

}

export default productListByCategoryService;

// const { products } = db;

// if (products.length === 0) {
//   throw new Error ("Products not found.");
// };