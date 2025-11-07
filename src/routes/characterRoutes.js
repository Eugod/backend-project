import express from "express";
import { getFirstTwoCharacters } from "../controllers/characterController.js";

const router = express.Router();

router.get("/characters", getFirstTwoCharacters);

export default router;