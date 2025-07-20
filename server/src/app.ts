import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes/index.js";

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("debate club is running!");
});

// router

app.use("/api/v1", router);

// middleware for 404

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Not Found",
  });
});

// error middleware

app.use((err: Error, req: Request, res: Response) => {
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: err.message,
  });
});

export default app;
