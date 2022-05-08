import db from "../../database";

const categoryListByIDService = ({ id }) => {
  const { categories } = db;
  const categoryID = categories.find((category) => category.id === id);

  if (categoryID === -1) {
    throw new Error ("Category not found.");
  };

  return categoryID;
}

export default categoryListByIDService;