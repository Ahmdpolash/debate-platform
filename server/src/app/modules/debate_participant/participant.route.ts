import { Router } from "express";
import { participantController } from "./participant.controller.js";

const router = Router();

router.post("/join", participantController.joinDebate);
router.get('/:id', participantController.getParticipants )

export const participantRoutes = router;
