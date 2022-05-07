import db from "../../database";

const categoryDeleteService = ({ id }) => {
  let categoryID = db.categories.findIndex((category) => category.id === id);

  if (categoryID === -1) {
    throw new Error ("Category not found.");
  };

  db.categories.splice(categoryID, 1);
}

export default categoryDeleteService;