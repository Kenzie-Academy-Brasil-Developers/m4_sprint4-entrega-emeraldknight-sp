import { Router } from "express";
import productCreateController from "../controllers/products/productCreate.controller";
import productDeleteController from "../controllers/products/productDelete.controller";
import productListController from "../controllers/products/productList.controller";
import productListByCategoryController from "../controllers/products/productListByCategory.controller";
import productListByIDController from "../controllers/products/productListById.controller";
import productUpdatedController from "../controllers/products/productUpdate.controller";

const router = Router();

router.post("/", productCreateController);
router.get("/", productListController);
router.get("/:id", productListByIDController);
router.get("/category/:category_id", productListByCategoryController);
router.patch("/:id", productUpdatedController);
router.delete("/:id", productDeleteController);

export default router;