// import db from "../../database";
import database from "../../database";

const categoryCreateService = async ({ name }) => {
  try {
    
    const res = await database.query(
      "INSERT INTO categories(name) VALUES ($1) RETURNING *;",
      [name]
    );

    const categoryAlreadyExists = res.rows.find((row) => row.name === name)
    
    if (categoryAlreadyExists === undefined) {
      throw new Error("Category already exists.")
    }

    const [categoryCreated] = res.rows;

    const message = {
      message: "Category created with sucess.",
      category: categoryCreated
    };
  
    return message;

  } catch (err) {
    throw new Error(err);

  }
}

export default categoryCreateService;

// const { categories } = db;
// const categoryID = categories.length.toString();
// const alreadyNameExists = categories.findIndex((category) => category.name === name);
// const alreadyIdExists = categories.findIndex((category) => category.id === id);

// if (alreadyNameExists !== -1) {
//   throw new Error ("Category already exists.");
// }

// if (alreadyIdExists !== -1) {
//   throw new Error ("Category already exists.");
// }

// const newCategory = {
//   id: categoryID,
//   name: name,
// };

// categories.push(newCategory);

// const message = {
//   message: "Category created",
//   category: newCategory
// };