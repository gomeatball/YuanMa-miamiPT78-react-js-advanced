//Things to do :
// 1. link to the addcontact page 
// 2. create a fetch to get the contacts via the api
// 3. useeffect hook is needed for syncing with the API
// 4. useGlobalreducer HOOk is needed to save the state in the store and dispatch
// 5. and to dispatch and needed actions (edit, delete)



import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";
import { Navbar } from "../components/Navbar";
import { fetchAllContacts } from "../lib/fetch";


export const Contact = () => {
    const { store, dispatch } = useGlobalReducer();
    useEffect(() => {
      fetchAllContacts(dispatch);
    }, [])

   

    return (
        <>
        <Navbar />
       <div className="container mt-4">
        {
            !store && !store.contacts
            ?
            <h1>Loading</h1>
            :
            store.contacts.map((contact) => {
                console.log("Contact:", contact);
                return (
                  

                 <div className="card" key={contact.id}>
                    <ContactCard 
                          name={contact.name}
                          address={contact.address}
                          phone={contact.phone}
                          email={contact.email}
                          id={contact.id}
                         
                      />
                      {/* <button>Edit</button>
                      <button>Del</button> */}
                 </div>
                
                )
            })
        }
       </div>
        </>
    );
}