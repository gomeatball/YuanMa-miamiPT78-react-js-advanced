// creat form to get info from user 
// useStates for each siring: name adress phone email
// controlled 
// a link to go back Contact page 
// useGlobalReducer to save updated info 
// post fetch data to API
import { useState } from "react";
import { Link } from "react-router-dom";
import { addContact } from "../lib/fetch";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const AddContact = () => {
    const [contactName, setContactName] = useState("")
    const [contactAddress, setContactAddress] = useState("")
    const [contactEmail, setContactEmail] = useState("")
    const [contactPhone, setContactPhone] = useState("")

    const { store, dispatch} = useGlobalReducer();

   

    return (
    <>
        <div className="AddContactTitle text-center">
        <h1>Add a new contact</h1>
        </div>
        <div className="row add-contact-row">
            <div className="col-2"></div>
            <div className="col-8">
              {/* <form className="contact-form"> */}
              
               <div className="mb-3">
                  <label htmlFor="contactName" className="form-label">Full Name</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  id="contactName" 
                  placeholder="contact name" 
                  value={contactName}
                  onChange={e => setContactName(e.target.value)}/>
               </div>
            </div>
            <div className="col-2"></div>
        </div>
        
        <div className="row add-contact-row">
            <div className="col-2"></div>
            <div className="col-8">
               <div className="mb-3">
                 <label htmlFor="emailAddress" className="form-label">Email address</label>
                 <input 
                  type="email" 
                  className="form-control" 
                  id="emailAddress" 
                  placeholder="name@example.com" 
                  value={contactEmail}
                  onChange={e => setContactEmail(e.target.value)}/>
               </div>
            </div>
            <div className="col-2"></div>
        </div>

        <div className="row add-contact-row">
            <div className="col-2"></div>
            <div className="col-8">
                <div className="mb-3">
                  <label htmlFor="contactPhone" className="form-label">Phone</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  id="contactPhone" 
                  placeholder="phone number" 
                  value={contactPhone}
                  onChange={e => setContactPhone(e.target.value)}/>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
        <div className="row add-contact-row">
            <div className="col-2"></div>
            <div className="col-8">
                <div className="mb-3">
                  <label htmlFor="contactAddress" className="form-label">Address</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  id="contactAddress" 
                  placeholder="address" 
                  value={contactAddress}
                  onChange={e => setContactAddress(e.target.value)}/>
                </div>

               <button 
                  type="submit"
                  className="btn btn-primary w-100"
                  onClick={() => addContact(contactName, contactAddress, contactPhone, contactEmail, dispatch)}>
                Save
               </button>
               <div>
                  <Link to="/">Or get back to contacts</Link>
               </div>
            </div>
            <div className="col-2"></div>
        </div>
       
        </>
    );
}