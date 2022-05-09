// import db from "../../database";
import database from "../../database";

const categoryListService = async () => {
  try {
    const res = await database.query(
      "SELECT * FROM categories;"
    );
    
    const categories = res.rows.map((row) => {
      const { id, name } = row;
      
      return {
        id,
        name
      }
    })

    return categories;

  } catch (err) {
    throw new Error(err);
  }

}

export default categoryListService;

// const { categories } = db;

// if (categories.length === 0) {
//   throw new Error ("Category not found.");
// };
