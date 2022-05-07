import { Router } from "express";
import productCreateController from "../controllers/products/productCreate.controller";
import productListController from "../controllers/products/productList.controller";

const router = Router();

router.post("/", productCreateController);
router.get("/", productListController);

export default router;