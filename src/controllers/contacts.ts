import type { Request, Response } from "express";
import { createContact, deleteContact, getContacts } from "../models/contacs.js";

type AddContact = {
  name: string
}


export async function createContactController(req: Request, res: Response) {
  if (!req.body) {
    return res.json({ error: "Parameter 'name' must be send" })
  }

  const { name }: Partial<AddContact> = req.body

  if (!name || name.length < 2) {
    return res.json({ error: "Parameter 'name' exist and be bigger than 2 characters" })
  }

  await createContact(name)

  res.status(201).json({ name: name })
}

export async function getContactsController(req: Request, res: Response) {
  let contacts = await getContacts()

  return res.status(200).json({ contatos: contacts })
}


export async function deleteContactController(req: Request, res: Response) {
  if (!req.query) {
    return res.json({ error: "Query 'name' must be sended" })
  }
  const { name }: Partial<AddContact> = req.query

  if (!name || name.length < 2) {
    return res.json({ error: "Query 'name' must exist and be bigger than 2 characters" })
  }

  await deleteContact(name)

  return res.status(200).json({ name: name })
}