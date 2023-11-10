/*
Exercice : Vous allez faire appel à l'API que vous avez développé en utilisant Axios
l'objectif sera de contacter le serveur, et de demander la route get localhost:5000/api/contacts
Récupérez les informations de cette route et affichez-les dans le frontend.

*/
import axios from "axios";
import { useState, useEffect } from "react";
import "./contacts.css";

function Contacts() {
  const [contacts, setContacts] = useState("");
  useEffect(() => {
    axios.get("http://localhost:5000/api/contacts").then((res) => {
      setContacts(res.data);
    });
  }, []);
  return (
    <div>
      {contacts
        ? contacts.map((contact, index) => (
            <div className="contact" key={index}>
              <p className="contact-name">{contact.name}</p>
              <p className="contact-email">{contact.email}</p>
              <p className="contact-phone">{contact.phone}</p>
              <input
                className="contact-delete"
                type="button"
                value="DELETE"
                onClick={() => handleDelete()}
              />
              <input
                type="button"
                value="EDIT"
                onClick={() => handleEdit()}
                className="contact-edit"
              />
            </div>
            
            /*Exercice : Vous avez 2 boutons, edit et delete
            Pour le bouton delete, vous allez utiliser la route DELETE /api/contacts/:id de notre API
            Pour le bouton Edit; vous allez créer une seconde page react qui va contenir un formulaire
            ou vous allez entrer les informations à changer (Le bouton edit nécessite d'utiliser React Router)
            */
          ))
        : "..."}
    </div>
  );
}

export default Contacts;
