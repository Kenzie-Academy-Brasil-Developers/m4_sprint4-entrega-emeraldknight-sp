import db from "../../database";

const categoryListService = () => {
  const { categories } = db;

  if (categories.length === 0) {
    throw new Error ("Category not found.");
  };

  return categories;
}

export default categoryListService;