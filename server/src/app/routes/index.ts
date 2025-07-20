import { Router } from "express";
import { debateRoutes } from "../modules/debate/debate.route.js";
import { userRoutes } from "../modules/user/user.route.js";
import { participantRoutes } from "../modules/debate_participant/participant.route.js";

const router = Router();

const moduleRoutes = [
  {
    path: "/debate",
    route: debateRoutes,
  },
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/participant",
    route: participantRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
