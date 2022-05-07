import productCreateService from "../../services/products/productCreate.service";

const productCreateController = async (req, res) => {
  const { name, price, category_id } = req.body;

  console.log("REQ", req)

  const newProduct = await productCreateService({ name, price, category_id });

  return res.status(201).send(newProduct);
}

export default productCreateController;