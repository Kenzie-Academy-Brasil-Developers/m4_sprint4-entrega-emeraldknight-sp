// import db from "../../database";
import database from "../../database";

const productCreateService = async ({ name, price, category }) => {
  try {

    const categories = await database.query(
      "SELECT * FROM categories WHERE name ILIKE $1 ;",
      [`%${category}%`]
    )

    let idCategory = null;
    let nameCategory = null;

    category ? idCategory = categories.rows[0].id : idCategory = null;
    category ? nameCategory = categories.rows[0].name : nameCategory = null;

    const res = await database.query(
      "INSERT INTO products(name, price, category_id) VALUES ($1, $2, $3) RETURNING *;",
      [name, price, idCategory]
    );

    // const [productCreated] = res.rows;

    
    const productCreated = {
      name: res.rows[0].name,
      price: res.rows[0].price,
      id: res.rows[0].id,
      categories: nameCategory
    }
    
    // console.log("PROD", productCreated)
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
// const alreadyNameExists = products.findIndex((categories) => categories.name === name);

// if (alreadyNameExists !== -1) {
//   throw new Error ("Product already exists.");
// }

// const newProduct = {
//   id: productID,
//   name: name,
//   price: price,
//   category: category
// };

// products.push(newProduct);