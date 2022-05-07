import categoryCreateService from "../../services/categories/categoryCreate.service";

const categoryCreateController = async (req, res) => {
  const { name } = req.body;

  try {
    const newCategory = await categoryCreateService({ name });
    return res.status(201).send(newCategory);

  }
  catch (err) {
    return res.status(400).json({
      status: "error",
      message: err.message
    })
    
  }
}

export default categoryCreateController;