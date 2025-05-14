export const addContact = async (name, address, phone, email, dispatch) => {
  const newContact = {
    name: name,
    address: address,
    phone: phone,
    email: email,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newContact),
  };

  const response = await fetch(
    "https://playground.4geeks.com/contact/agendas/yuanM/contacts",
    options
  );
  try {
    if (!response.ok) {
      throw new Error("Error creating contact!", response.status);
    }
    const data = await response.json();
    dispatch({
      type: "createdContact",
      payload: data,
    });

    return data;
  } catch (error) {
    console.log("Error posting contact to the agenda, ", error);
  }
};

export const fetchAllContacts = async (dispatch) => {
  const response = await fetch(
    "https://playground.4geeks.com/contact/agendas/yuanM/contacts"
  );
  try {
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    // console.log(data.contacts);
    // we need to be able to save the contacts in the store
    // to accomplish this, we need to create a dispatch to set the contacts key in the store
    dispatch({
      //type is function call
      type: "fetchedContacts",
      payload: data.contacts,
    });
  } catch (error) {
    console.error(
      "Error getting agenda. Check if URL is incorrect or if agenda doesn't exists.",
      error
    );
  }
};

export const deleteContact = async (id, dispatch) => {
  const options = {
    method: "DELETE",
  };
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/yuanM/contacts/${id}`,
    options
  );
  try {
    if (!response.ok) {
      throw new Error("Error, unable to delete contact!", response.status);
    }
    dispatch({
      type: "deletedContact",
      payload: { id: id },
    });
  } catch (error) {
    console.error("Error deleting contact, ", error);
  }
};

export const editContact = async (
  id,
 updateData,
  dispatch
) => {
  
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  };
 try {
   const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/yuanM/contacts/${id}`,
    options
  )
  if (!response.ok) {
    throw new Error("Unable to edit contact, ");
    
  }
   const updateContact = await response.json();
    dispatch({
      type: "editContact",
      payload: updateContact,
    });
  
 } catch (error) {
  console.error("Error editing contact, ", error)
 }
};


export const getContactbyID = async (id) => {
  try {
    const response = await fetch(
      `https://playground.4geeks.com/contact/agendas/yuanM/contacts/${id}`
    );
    if (!response.ok) throw new Error("Failed to fetch contact");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching contact by ID:", error);
  }
};
