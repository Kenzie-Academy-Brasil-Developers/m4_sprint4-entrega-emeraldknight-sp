import { Router } from "express";
import categoryCreateController from "../controllers/categories/categoryCreate.controller";
import categoryListController from "../controllers/categories/categoryList.controller";

const router = Router();

router.post("/", categoryCreateController);
router.get("/", categoryListController);

export default router;