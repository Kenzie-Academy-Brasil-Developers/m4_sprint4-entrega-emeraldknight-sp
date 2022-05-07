import productDeleteService from "../../services/products/productDelete.service";

const productDeleteController = async (req, res) => {
  const { id } = req.params;

  try {
    const productDeleted = productDeleteService({ id });
    return res.status(200).json({ message: "Product deleted with success." })

  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: err.message
    })

  }
}

export default productDeleteController;