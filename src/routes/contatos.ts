import { Router } from "express";
import { createContact, deleteContact, getContacts } from "../services/contacs.js";


const contatosRouter = Router()

type AdicionaContato = {
  name: string
}


contatosRouter.post("/", async (req, res) => {
  if (!req.body) {
    return res.json({ error: "Parameter 'name' must be send" })
  }

  const { name }: Partial<AdicionaContato> = req.body

  if (!name || name.length < 2) {
    return res.json({ error: "Parameter 'name' exist and be bigger than 2 characters" })
  }

  await createContact(name)

  res.status(201).json({ name: name })

})

contatosRouter.get("/", async (require, res) => {
  let contacts = await getContacts()

  return res.status(200).json({ contatos: contacts })
})

contatosRouter.delete("/", async (req, res) => {
  if (!req.query) {
    return res.json({ error: "Query 'name' must be sended" })
  }
  const { name }: Partial<AdicionaContato> = req.query

  if (!name || name.length < 2) {
    return res.json({ error: "Query 'name' must exist and be bigger than 2 characters" })
  }

  await deleteContact(name)

  return res.status(200).json({ name: name })
})

export default contatosRouter