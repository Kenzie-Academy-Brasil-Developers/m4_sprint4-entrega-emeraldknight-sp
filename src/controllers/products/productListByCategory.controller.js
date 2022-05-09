import productListByCategoryService from "../../services/products/productListByCategory.service";

const productListByCategoryController = async (req, res) => {
  try {
    const category_id = req.params.id
    const productList = await productListByCategoryService({ category_id });
    return res.status(200).send(productList)

  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: err.message
    })
  }
}

export default productListByCategoryController;