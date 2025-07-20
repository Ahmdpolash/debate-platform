import { Router } from "express";
import { ArgumentControllers } from "./arguments.controller.js";

const router = Router();

router.post("/", ArgumentControllers.postArgument);

router.get("/:side", ArgumentControllers.getArgumentsBySide);

export const argumentRoutes = router;
