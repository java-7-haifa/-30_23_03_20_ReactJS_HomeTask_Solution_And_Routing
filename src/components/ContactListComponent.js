import React from "react";
import { Route } from "react-router-dom";
import NestedComponent from "./NestedComponent";

export default props => {
  function getAllContacts() {
    let json = localStorage.getItem("contacts");
    if (json != null) {
      return JSON.parse(json);
    }
    return [];
  }
  return (
    <div className="contact-list">
      <ul>
        {getAllContacts().map(c => {
          return (
            // <li key={c.id} onClick={()=> props.history.push(`/contact-view?id=${c.id}`)}>
            <li key={c.id} onClick={()=> props.history.push(`/contacts/${c.id}`)}>
              <h3>{c.name}</h3>
              <h4>{c.phone}</h4>
            </li>
          );
        })}
      </ul>
      <Route path='/contacts/:id' component={NestedComponent}/>
    </div>
  );
};
