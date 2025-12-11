import { Router } from "express";
import { createContactController, deleteContactController, getContactsController } from "../controllers/contacts.js";


const contactsRouter = Router()


contactsRouter.post("/", createContactController)

contactsRouter.get("/", getContactsController)

contactsRouter.delete("/", deleteContactController)

export default contactsRouter