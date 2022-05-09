import database from "../../database";
// import db from "../../database";

const categoryListByIDService = async ({ id }) => {
  try {
    const res = await database.query(
      "SELECT * FROM categories;"
    );
    
    const categoryListedByID = res.rows.find((row) => row.id === id)

    if (!categoryListedByID) {
      throw new Error("Category not found.");
    }

    return categoryListedByID;

  } catch (err) {
    throw new Error(err);
  }
}

export default categoryListByIDService;

// const { categories } = db;
// const categoryID = categories.find((categoryListedByID) => categoryListedByID.id === id);

// if (categoryID === -1) {
//   throw new Error ("Category not found.");
// };

// return categoryID;