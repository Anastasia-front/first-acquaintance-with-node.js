const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const strID = String(contactId);
  const contacts = await listContacts();
  const contact = contacts.find((item) => item.id === strID);
  return contact || null;
}

async function removeContact(contactId) {
  const strID = String(contactId);
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === strID);
  if (index === -1) {
    return null;
  }
  const [contact] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contact;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const strPhone = String(phone);
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone: strPhone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
