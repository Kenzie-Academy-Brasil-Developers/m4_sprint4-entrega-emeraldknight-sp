// import db from "../../database";

import database from "../../database";

const categoryDeleteService = async ({ id }) => {
  try {

    const res = await database.query(
      "SELECT * FROM categories;"
    );

    const categoryDeleted = res.rows.find((row) => row.id === id);

    if (!categoryDeleted) {
      throw new Error("Category not found.");
    }
    
    await database.query("DELETE FROM categories WHERE id = $1;",
    [id]);
    
    const message = {
      message: "Category deleted with sucess.",
      category: categoryDeleted
    };

    return message;

  } catch (err) {
    throw new Error(err);
  }

}

export default categoryDeleteService;

// let categoryID = db.categories.findIndex((category) => category.id === id);

// if (categoryID === -1) {
//   throw new Error ("Category not found.");
// };

// db.categories.splice(categoryID, 1);