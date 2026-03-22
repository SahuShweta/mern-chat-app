import express from "express";
import {
    getUser,
    signin,
    signout,
    signup,
    updateProfile,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/sign-up", signup);
router.post("/sign-in", signin);
router.post("/sign-out", signout);
router.post("/me", getUser);
router.post("/update-profile", updateProfile);


export default router;