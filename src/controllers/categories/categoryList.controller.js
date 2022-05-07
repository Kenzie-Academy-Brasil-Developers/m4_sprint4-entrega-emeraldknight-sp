import categoryListService from "../../services/categories/categoryList.service";

const categoryListController = async (req, res) => {
  try {
    const categoryList = await categoryListService();
    return res.status(200).send(categoryList)

  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: err.message
    })
  }
}

export default categoryListController;