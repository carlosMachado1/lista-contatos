import { Router } from "express";
import contatosRouter from "./contatos.js";

const router = Router()

router.use("/contatos", contatosRouter)



export default router