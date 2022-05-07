import { Router } from "express";
import productCreateController from "../controllers/categories/categoryCreate.controller";
import productListController from "../controllers/categories/categoryList.controller";

const router = Router();

router.post("/", productCreateController);
router.get("/", productListController);

export default router;