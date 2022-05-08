import db from "../../database";

const categoryUpdateService = async ({ id, name }) => {
  let { categories } = db;

  const categoryID = await categories.findIndex((category) => category.id === id);

  if (categoryID === -1) {
    throw new Error ("Category not found.");
  };

  const categoryUpdated = {
    id, 
    name: name
  };

  categories.splice(categoryID, 1, categoryUpdated);

  return categoryUpdated;

}

export default categoryUpdateService;