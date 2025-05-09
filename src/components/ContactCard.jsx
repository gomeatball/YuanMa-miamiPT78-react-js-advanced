// import { delContact } from "../hooks/Action"

import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const ContactCard = ({ name, address, phone, email, id }) => {
    const { store, dispatch } = useGlobalReducer();
const DelContact = () => {
  
  
   
//  const newArray = store.contacts.filter(contact => contact.id!== id);
//  dispatch({type: "SET_CONTACTS", payload:newArray});

  
   
}
   
   
   
   
    return (
        <>
        <div className="contactCard-container d-flex justify-content-around mt-4">
        <img className="card-img w-25 h-25" src="https://avatar.iran.liara.run/public"/>
        <div className="contact-card-info">
            <h4>{name}</h4>
            <h6>{address}</h6>
            <h6>{phone}</h6>
            <h6>{email}</h6>
        </div>
        <div className="Edit&Del w-25 d-flex justify-content-around">
            <Link to="/addcontact">
             <button className="edit h-25 border-0" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                </svg>
             </button>
            </Link>
            <button className="del h-25 border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
             <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
             <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
             </svg>
            </button>
        
   <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel">
      <div className="modal-dialog">
       <div className="modal-content">
          <div className="modal-header">
                 <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            If you delete this thing the entire universe will go down!
          </div>
          <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Oh NO!</button>
              <button type="button" className="btn btn-secondary" onClick={DelContact}>YES Baby!</button>
          </div>
       </div>
      </div>
   </div>

        </div>
       </div>
        </>
    )
}