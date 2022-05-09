import categoryDeleteService from "../../services/categories/categoryDelete.service";

const categoryDeleteController = async (req, res) => {
  const { id } = req.params;

  try {
    const categoryDeleted = await categoryDeleteService({ id });
    return res.status(200).send(categoryDeleted)

  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: err.message
    })

  }
}

export default categoryDeleteController;