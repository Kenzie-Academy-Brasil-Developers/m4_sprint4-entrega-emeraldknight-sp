import { Router } from "express";
import categoryCreateController from "../controllers/categories/categoryCreate.controller";
import categoryDeleteController from "../controllers/categories/categoryDelete.controller";
import categoryListController from "../controllers/categories/categoryList.controller";
import categoryListByIDController from "../controllers/categories/categoryListById.controller";
import categoryUpdatedController from "../controllers/categories/categoryUpdate.controller";

const router = Router();

router.post("/", categoryCreateController);
router.get("/", categoryListController);
router.get("/:id", categoryListByIDController);
router.patch("/:id", categoryUpdatedController);
router.delete("/:id", categoryDeleteController);

export default router;