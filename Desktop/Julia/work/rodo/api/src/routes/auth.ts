import { Router } from "express";
import { signup, login, googleSignin } from "../controllers/auth";


const router = Router();

router.post('/signup', signup);
router.post("/login", login);
router.post("/google-signin", googleSignin);
export default router;