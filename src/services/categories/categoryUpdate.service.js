// import db from "../../database";

import database from "../../database";

const categoryUpdateService = async ({ id, name }) => {

  try {
    const res = await database.query(
      "SELECT * FROM categories;"
    );

    const category = res.rows.find((row) => row.id === id);

    if (!category) {
      throw new Error("Category not found.");
    }

    const categoryUpdated = {
      id,
      name: name
    }
    
    const message = {
      message: "Category updated",
      category: categoryUpdated
    };
  
    return message;
  } catch (err) {
    throw new Error(err);
  }

}

export default categoryUpdateService;

// let { categories } = db;

// const categoryID = await categories.findIndex((category) => category.id === id);

// if (categoryID === -1) {
//   throw new Error ("Category not found.");
// };

// const categoryUpdated = {
//   id, 
//   name: name
// };

// categories.splice(categoryID, 1, categoryUpdated);