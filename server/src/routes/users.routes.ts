import { Router } from "express";
import {
  createUser,
  getUserById,
  getUsers,
} from "../controllers/users.controller";
const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:cognitoId", getUserById);
export default router;
