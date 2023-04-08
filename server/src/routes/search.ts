import { Router } from "express";
const router = Router();
import { searchFoods } from "../controller/search";

router.get("/food", searchFoods);
router.get("/food/:id", searchFoods);

export default router;
