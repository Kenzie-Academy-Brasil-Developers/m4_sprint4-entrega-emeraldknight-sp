import categoryListByIDService from "../../services/categories/categoryListById.service";


const categoryListByIDController = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await categoryListByIDService({ id });
    return res.status(200).send(category);

  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: err.message
    })
  }

}

export default categoryListByIDController;