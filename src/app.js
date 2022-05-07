import express from "express";
import "dotenv/config";

const app = express();
const port = 3333;

app.use(express.json());

export default app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});