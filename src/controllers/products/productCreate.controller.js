import productCreateService from "../../services/products/productCreate.service";

const productCreateController = async (req, res) => {
  const { name, price, categoria_id } = req.body;

  const newProduct = await productCreateService({ name, price, categoria_id });

  return res.status(201).send(newProduct);
}

export default productCreateController;