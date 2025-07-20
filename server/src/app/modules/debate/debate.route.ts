import { Router } from "express";
import { debateControllers } from "./debate.controller.js";

const router = Router();

router.post("/", debateControllers.createDebate);

router.get("/", debateControllers.getDebate);

router.get("/:id", debateControllers.getSingleDebate);

export const debateRoutes = router;
