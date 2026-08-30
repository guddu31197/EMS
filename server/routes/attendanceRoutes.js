import { Router } from "express";
import { protect } from "../middleware/auth.js";
import { clocInOut, getAttendance } from "../controllers/attendenceController";

const attendanceRouter = Router();
attendanceRouter.post('/', protect, clocInOut)
attendanceRouter.get('/', protect, getAttendance)

export default attendanceRouter;