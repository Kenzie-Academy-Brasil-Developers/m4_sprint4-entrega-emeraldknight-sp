import db from "../../database";

const categoryCreateService = ({ id, name }) => {

  const { categories } = db;
  const categoryID = categories.length.toString();
  const alreadyNameExists = categories.findIndex((category) => category.name === name);
  const alreadyIdExists = categories.findIndex((category) => category.id === id);

  if (alreadyNameExists !== -1) {
    throw new Error ("Category already exists.");
  }

  if (alreadyIdExists !== -1) {
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