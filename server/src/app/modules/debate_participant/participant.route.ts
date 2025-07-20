import { Router } from "express";
import { participantController } from "./participant.controller.js";

const router = Router();

router.post("/join", participantController.joinDebate);

export const participantRoutes = router;
