import { Router } from "express";
import { userRouter } from "./usersRouter";
import appointmentRouter from "./appointmentRoutes";

const router: Router = Router();

router.use("/users", userRouter);
router.use("/appointments", appointmentRouter);

export default router;
