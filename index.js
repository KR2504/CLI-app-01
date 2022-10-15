const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const contacts = require('./contacts');

const invokeAction = async({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            console.log(allContacts)
            break;
        case "get":
            const contactsById = await contacts.getContactById(id);
            console.log(contactsById)
            break;
        case "add":
            const newContact = await contacts.addContact({ name, email, phone });
            console.log(newContact)
            break;
        case "remove":
            const remove = await contacts.removeContact(id);
            console.log(remove)
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
};
const arr = hideBin(process.argv);
const { argv } = yargs(arr);

invokeAction(argv);