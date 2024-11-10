import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Param } from "@nestjs/common";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data
let shifts = [
  {
    id: "1",
    startTime: new Date(2024, 2, 20, 9, 0),
    endTime: new Date(2024, 2, 20, 17, 0),
    specialty: "Emergency Medicine",
    status: "OPEN",
    facility: {
      name: "General Hospital",
    },
  },
  {
    id: "2",
    startTime: new Date(2024, 2, 21, 10, 0),
    endTime: new Date(2024, 2, 21, 18, 0),
    specialty: "Pediatrics",
    status: "OPEN",
    facility: {
      name: "Children's Hospital",
    },
  },
];

// Routes
app.get("/api/shifts", (req, res) => {
  res.json(shifts);
});

app.post("/api/shifts/:id/apply", async (req, res) => {
  const shift = shifts.find((s) => s.id === req.params.id);
  if (!shift) {
    return res.status(404).json({ message: "Shift not found" });
  }
  if (shift.status !== "OPEN") {
    return res.status(400).json({ message: "Shift is not available" });
  }

  shift.status = "FILLED";
  res.json({ message: "Successfully applied for shift" });
});

app.get("/api/shifts/:id", (req: Request<{ id: string }>, res: Response) => {
  const id = req.params.id;
  return res.send(`ID received: ${id}`);
});

app.listen(3000, () => console.log("Server running on port 3000"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
