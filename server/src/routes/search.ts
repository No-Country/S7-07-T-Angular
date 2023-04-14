import { Router } from "express";
const router = Router();
import { searchFoodById, searchFoods } from "../controller/search";

router.get("/food", searchFoods);
router.get("/food/:id", searchFoodById);

export default router;
