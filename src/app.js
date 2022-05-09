import "dotenv/config";
import express from "express";
import productsRouters from "./routes/products.routes";
import categoriesRouters from "./routes/categories.routes";
import { startDatabase } from "./database";

const app = express();
const port = 3333;

app.use(express.json());
app.use("/products", productsRouters);
app.use("/categories", categoriesRouters);

export default app.listen(process.env.PORT || port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  startDatabase()
});