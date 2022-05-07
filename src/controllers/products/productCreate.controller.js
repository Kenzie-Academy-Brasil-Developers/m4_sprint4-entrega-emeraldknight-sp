import productCreateService from "../../services/products/productCreate.service";

const productCreateController = async (req, res) => {
  const { name, price, category_id } = req.body;
  
  try {
    const newProduct = await productCreateService({ name, price, category_id });
    return res.status(201).send(newProduct);

  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: err.message
    })
  }

}

export default productCreateController;