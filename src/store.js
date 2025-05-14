export const initialStore = () => {
  return {
    // message: null,
    // todos: [
    //   {
    //     id: 1,
    //     title: "Make the bed",
    //     background: null,
    //   },
    //   {
    //     id: 2,
    //     title: "Do my homework",
    //     background: null,
    //   }
    // ]
    contacts: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    // case 'add_task':

    //   const { id,  color } = action.payload

    //   return {
    //     ...store,
    //     todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
    //   };
    case "fetchedContacts":
      const contactArray = action.payload;
      // console.log("inside reducer: ", contactArray);

      return {
        ...store,
        contacts: [...contactArray],
      };
    case "createdContact":
      // get the newly created contact object from action.payload
      const newContact = action.payload;
      return {
        ...store,
        contacts: [...store.contacts, newContact],
      };

    case "editContact":
      const updateContact = action.payload;
      return {
              ...store,
       contacts: store.contacts.map(contact =>
      contact.id === updateContact.id ? updateContact : contact
    ),
      }
     ;

    case "deletedContact":
      const { id } = action.payload;
      return {
        ...store,
        contacts: store.contacts.filter((contact) => contact.id !== id),
      };
    default:
      throw Error("Unknown action.");
  }
}
