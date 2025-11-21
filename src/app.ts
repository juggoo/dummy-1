import "dotenv/config";
import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 7000;

// Dummy users data
const dummyUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 28,
    role: "developer",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 32,
    role: "designer",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    age: 25,
    role: "manager",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    age: 29,
    role: "developer",
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.brown@example2.com",
    age: 35,
    role: "analyst",
  },
];

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Application running!",
  });
});

app.get("/api/users", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: dummyUsers,
    count: dummyUsers.length,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
