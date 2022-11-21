import { Router } from "express";
import { getDefaultEvent } from "@/controllers";
import { authenticateToken } from "@/middlewares";

const paymentsRouter = Router();

paymentsRouter.get("/", authenticateToken );
paymentsRouter.post("/process", authenticateToken );

export { paymentsRouter };
