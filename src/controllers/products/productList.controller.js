import productListService from "../../services/products/productList.service";

const productListController = async (req, res) => {
  try {
    const productList = await productListService();
    return res.status(200).send(productList)

  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: err.message
    })
  }
}

export default productListController;