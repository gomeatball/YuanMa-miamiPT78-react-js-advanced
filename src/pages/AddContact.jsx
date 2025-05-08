// creat form to get info from user 
// useStates for each siring: name adress phone email
// controlled 
// a link to go back Contact page 
// useGlobalReducer to save updated info 
// post fetch data to API
import { useState } from "react";

export const AddContact = () => {
    const [contactName, setContactName] = useState("")
    const [contactAddress, setContactAddress] = useState("")
    const [contactEmail, setContactEmail] = useState("")
    const [contactPhone, setContactPhone] = useState("")

    return (
    <>
        <div className="row add-contact-row">
            <div className="col-2"></div>
            <div className="col-8">
              {/* <form className="contact-form"> */}
               <div class="mb-3">
                  <label htmlFor="contactName" class="form-label">Full Name</label>
                  <input 
                  type="text" 
                  class="form-control" 
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
               <div class="mb-3">
                 <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
                 <input 
                  type="email" 
                  class="form-control" 
                  id="exampleFormControlInput1" 
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
                <div class="mb-3">
                  <label htmlFor="contactPhone" class="form-label">Phone</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  id="exampleFormControlInput1" 
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
                <div class="mb-3">
                  <label htmlFor="contactAddress" class="form-label">Address</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  id="exampleFormControlInput1" 
                  placeholder="address" 
                  value={contactAddress}
                  onChange={e => setContactAddress(e.target.value)}/>
                </div>
               <button 
                  type="submit"
                  className="btn btn-success"
                  onClick={() => {}}>
                Submit
               </button>
            </div>
            <div className="col-2"></div>
        </div>
        </>
    );
}