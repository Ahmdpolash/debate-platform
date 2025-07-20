import { Router } from "express";
import { debateRoutes } from "../modules/debate/debate.route.js";
import { userRoutes } from "../modules/user/user.route.js";
import { participantRoutes } from "../modules/debate_participant/participant.route.js";
import { argumentRoutes } from "../modules/arguments/argument.routes.js";

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
  {
    path: "/argument",
    route: argumentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
