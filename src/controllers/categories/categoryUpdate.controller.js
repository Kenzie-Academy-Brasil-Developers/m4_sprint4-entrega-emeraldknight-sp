import categoryUpdateService from "../../services/categories/categoryUpdate.service";

const categoryUpdatedController = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const categoryUpdated = await categoryUpdateService({ id, name });
    return res.status(200).send(categoryUpdated);

  } catch (err) {
    return res.status(404).json({
      status: "error",
      message: err.message
    });
  }
}

export default categoryUpdatedController;