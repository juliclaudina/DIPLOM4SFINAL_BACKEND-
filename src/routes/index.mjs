import express from "express";
import superHeroRoutes from "./superHeroRoutes.mjs";
import authRouter from "./authRouter.mjs";
import profileRouter from "./profileRouter.mjs";
const router = express.Router();

router.use("/superheroes", superHeroRoutes);
router.use("/auth", authRouter);
router.use("/profiles", profileRouter);

export default router;
