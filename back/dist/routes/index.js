"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRouter_1 = require("./usersRouter");
const router = (0, express_1.Router)();
router.use("/users", usersRouter_1.userRouter);
// appointments
router.post("/appointments/schedule");
router.get("/appointments");
router.get("/appointments/:id");
router.put("/appointments/cancel");
exports.default = router;
