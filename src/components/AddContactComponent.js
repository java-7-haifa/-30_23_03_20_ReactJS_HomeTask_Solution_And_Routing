import React from "react";

export default class extends React.Component {
  state = {
    name: "",
    phone: "",
    email: ""
  };

  changeNameHandler = name => {
    this.setState({ ...this.state, name });
  };
  changePhoneHandler = phone => {
    this.setState({ ...this.state, phone });
  };

  changeEmailHandler = email => this.setState({ ...this.state, email });

  onAddBtnClickHandler = () => {
    let date = new Date();
    let json = localStorage.getItem("contacts");
    let contacts;

    if(json === null){
        contacts = [];
    }else{
        contacts = JSON.parse(json);
    }
    
    contacts.push({
      id: date.getTime(),
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email
    });
    localStorage.setItem("contacts", JSON.stringify(contacts));
    this.setState({ name: "", phone: "", email: "" });
  };

  render() {
    return (
      <>
        <input
          className="form-control"
          placeholder="Type name"
          value={this.state.name}
          onChange={e => this.changeNameHandler(e.target.value)}
        />
        <input
          className="form-control"
          placeholder="Type phone"
          value={this.state.phone}
          onChange={e => this.changePhoneHandler(e.target.value)}
        />
        <input
          className="form-control"
          placeholder="Type email"
          value={this.state.email}
          onChange={e => this.changeEmailHandler(e.target.value)}
        />
        <button className="btn" onClick={this.onAddBtnClickHandler}>
          Add
        </button>
      </>
    );
  }
}
