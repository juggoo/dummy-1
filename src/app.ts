import "dotenv/config";
import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 7000;

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Application running!",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
