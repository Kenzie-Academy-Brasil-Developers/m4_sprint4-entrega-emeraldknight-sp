import db from "../../database";

const categoryCreateService = ({ name }) => {

  const { categories } = db;
  const categoryID = categories.length

  const newCategory = {
    id: categoryID,
    name: name,
  }

  categories.push(newCategory);

  return newCategory;
}

export default categoryCreateService;