import React, { useState, useRef } from "react";
import { Form, Button, Row, Col, Accordion, Card } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import ListItem from "./components/Contact/ListItem";
import ListItems from "./components/Contact/ListItems";
import AddForm from "./components/Contact/AddForm";
import Footer from "./components/Footer";

export default function Contact() {
  const [arrContacts, setArrContacts] = useState([]);

  function handleAddContact(contact) {
    setArrContacts([...arrContacts, contact]);
  }

  // const listArr = arrContacts.map(function(item, index) {
  //   // return (
  //   //   <ListItem
  //   //     key={item.id}
  //   //     item={item}
  //   //     index={index}
  //   //     remove={remove}
  //   //     update={handleUpdate}
  //   //   />
  //   // );

  //   return (
  //     <ListItem
  //       key={item.id}
  //       item={item}
  //       index={index}
  //       remove={remove}
  //       update={handleUpdate}
  //     />
  //   );
  // });

  function handleUpdate(param) {
    const updatedItem = JSON.parse(param);
    arrContacts.map(function(item) {
      if (item.id === updatedItem.id) {
        item.name = updatedItem.name;
        item.lastName = updatedItem.lastName;
        item.eMail = updatedItem.eMail;
        item.textArea = updatedItem.textArea;
      }
    });

    setArrContacts(arrContacts);
  }

  function handleRemove(contact) {
    console.log(contact);
    const itemID = contact.id;
    console.log(arrContacts);

    const arrX = arrContacts.filter(item => item.id != itemID).slice();
    console.log(arrX);
    setArrContacts(arrX);
  }

  return (
    <div className="bg-dark" style={{ height: "100vh", minHeight: "100vh" }}>
      <NavBar />
      <AddForm addContact={handleAddContact} />
      <ListItems
        contacts={arrContacts}
        remove={handleRemove}
        update={handleUpdate}
      />
    </div>
  );
}
