import productUpdateService from "../../services/products/productUpdate.service";

const productUpdatedController = (req, res) => {
  const { id } = req.params;
  const { name, price, category_id } = req.body;

  try {
    const productUpdated = await productUpdateService({ id, name, price, category_id });
    return res.status(200).send(productUpdated);

  } catch (err) {
    return res.status(404).json({
      status: "error",
      message: err.message
    });
  }
}

export default productUpdatedController;