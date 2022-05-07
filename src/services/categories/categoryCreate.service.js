import db from "../../database";

const categoryCreateService = ({ name }) => {

  const { categories } = db;
  const categoryID = categories.length;
  const alreadyNameExists = categories.findIndex((category) => category.name === name);

  if (alreadyNameExists !== -1) {
    throw new Error ("Category already exists.");
  }

  const newCategory = {
    id: categoryID,
    name: name,
  };

  categories.push(newCategory);

  return newCategory;
}

export default categoryCreateService;