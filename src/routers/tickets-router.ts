import { Router } from "express";
import { authenticateToken } from "@/middlewares";

const ticketsRouter = Router();

ticketsRouter.get("/", authenticateToken, );
ticketsRouter.get("/types", authenticateToken, );
ticketsRouter.get("/types/types", authenticateToken, );

export { ticketsRouter };
