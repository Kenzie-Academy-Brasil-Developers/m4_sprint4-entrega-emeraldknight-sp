import categoryUpdateService from "../../services/categories/categoryUpdate.service";

const categoryUpdatedController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  console.log("NAME", name)

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