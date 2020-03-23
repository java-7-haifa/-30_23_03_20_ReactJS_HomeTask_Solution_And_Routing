import React from "react";

export default props => {
  function getContactInfo(search) {
    if (!search) {
      return <h2 style={{ color: "red" }}>Contact not found</h2>;
    }
    let paramsStr = search.substring(1);
    let pairs = paramsStr.split("&");
    try {
      let quaries = pairs.map(p => {
        let tmp = p.split("=");
        if (tmp.length !== 2) {
          throw new Error("message");
        }
        return {
          key: tmp[0],
          value: tmp[1]
        };
      });
      let { key, value } = quaries[0];
      let json = localStorage.getItem("contacts");
      if (!json) {
        return (
          <h2
            style={{ color: "red" }}
          >{`Contact with id: ${value} not found`}</h2>
        );
      }
      let contacts = JSON.parse(json);
      let contact = contacts.find(c => c.id === value * 1);
      if (contact) {
        return (
          <>
            <p>{contact.name}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </>
        );
      } else {
        return (
          <h2
            style={{ color: "red" }}
          >{`Contact with id: ${value} not found`}</h2>
        );
      }
    } catch (error) {
      return <h2 style={{ color: "red" }}>Wrong query params</h2>;
    }
  }
  return <>
  <button onClick={()=>props.history.goBack()}>Back</button>
  {getContactInfo(props.location.search)}
  </>;
};
