import categoryCreateService from "../../services/categories/categoryCreate.service";

const categoryCreateController = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoryCreateService({ name });

  return res.status(201).send(newCategory);
}

export default categoryCreateController;