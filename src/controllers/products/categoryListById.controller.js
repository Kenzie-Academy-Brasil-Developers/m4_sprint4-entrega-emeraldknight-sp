import productListByIDService from "../../services/products/productListById.service";

const productListByIDController = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productListByIDService({ id });
    return res.status(200).send(product);

  } catch (err) {
    return res.status(404).json({
      status: "error",
      message: err.message
    })
  }

}

export default productListByIDController;