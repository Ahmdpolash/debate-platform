import { Router } from "express";
import { saveUserInfo } from "./user.controller.js";

const router = Router()

router.post('/', saveUserInfo)

export const userRoutes = router;