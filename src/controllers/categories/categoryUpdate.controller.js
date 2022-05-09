import categoryUpdateService from "../../services/categories/categoryUpdate.service";

const categoryUpdatedController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const categoryUpdated = await categoryUpdateService({ id, name });
    return res.status(200).send(categoryUpdated);

  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: err.message
    });
  }
}

export default categoryUpdatedController;