import React from "react";
import NestedComponent from "./NestedComponent";

export default props => {
  function getContactById(id) {
    try {
      if (!id) {
        throw new Error();
      }
      let json = localStorage.getItem("contacts");
      if (!json) {
        throw new Error();
      }
      let contacts = JSON.parse(json);
      let contact = contacts.find(c => c.id === id);
      if (!contact) {
        throw Error();
      }
      return (
        <>
          <p>{contact.name}</p>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </>
      );
    } catch (error) {
      return <h2 style={{ color: "red" }}>Contact not found!</h2>;
    }
  }
  return (
    <>
      {getContactById(props.match.params.id * 1)}
      <hr />
      <NestedComponent />
    </>
  );
};
