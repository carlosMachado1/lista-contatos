import { readFile, writeFile } from "fs/promises"
import { __dirname } from "../utils/locals.js"
import path from "path"

const dataSource = path.join(__dirname, "data", "list.txt")

export async function getContacts() {
  let contacts: string[] = []
  try {
    const data = await readFile(dataSource, { encoding: "utf-8" })
    contacts = data.split("\n")
  }
  catch (err) { }

  return contacts
}


export async function createContact(name: string) {
  let contacts = await getContacts()

  contacts.push(name)

  await writeFile(dataSource, contacts.join("\n"))
}

export async function deleteContact(name: string) {
  let contacts = await getContacts()

  for (let i = 0; i < contacts.length; i++) {
    if (contacts.at(i)?.toLowerCase() == name.toLowerCase()) {
      contacts.splice(i, 1)
    }
  }

  await writeFile(dataSource, contacts.join("\n"))
} 