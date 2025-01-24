"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.post("/users/register", userController_1.createUser);
router.get("/users", userController_1.getUser);
router.get("/users/:id", userController_1.getUserById);
router.post("users/login");
// appointments
router.post("/appointments/schedule");
router.get("/appointments");
router.get("/appointments/:id");
router.put("/appointments/cancel");
exports.default = router;
