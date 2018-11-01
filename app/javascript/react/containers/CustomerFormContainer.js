import React, { Component } from "react";
import TextInputField from "../components/TextInputField";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";

class CustomerFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipCode: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let formPayload = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      phone_number: this.state.phoneNumber,
      email: this.state.email,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip_code: this.state.zipCode
    };
    this.props.addNewContact(formPayload);
    this.handleClearForm();
    console.log(formPayload);
  }

  handleClearForm() {
    this.setState({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipCode: ""
    });
  }

  handleChange = name => event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <TextField
          variant="standard"
          content={this.state.firstName}
          name="firstName"
          label="First Name"
          value={this.state.firstName}
          onChange={this.handleChange("name")}
          fullWidth
        />
        <TextField
          variant="standard"
          content={this.state.lastName}
          name="lastName"
          label="Last Name"
          value={this.state.lastName}
          onChange={this.handleChange("name")}
          fullWidth
        />
        <TextField
          content={this.state.phoneNumber}
          variant="standard"
          label="Phone Number"
          name="phoneNumber"
          value={this.state.phoneNumber}
          onChange={this.handleChange("name")}
          margin="normal"
          fullWidth
        />
        <TextField
          content={this.state.email}
          variant="standard"
          label="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange("name")}
          margin="normal"
          fullWidth
        />
        <TextField
          content={this.state.address}
          variant="standard"
          label="address"
          name="address"
          value={this.state.address}
          onChange={this.handleChange("name")}
          fullWidth
        />
        <TextField
          content={this.state.city}
          variant="standard"
          label="city"
          name="city"
          value={this.state.city}
          onChange={this.handleChange("name")}
          fullWidth
        />
        <TextField
          content={this.state.state}
          variant="standard"
          label="state"
          name="state"
          value={this.state.state}
          onChange={this.handleChange("name")}
          fullWidth
        />
        <TextField
          content={this.state.zipCode}
          variant="standard"
          label="zip code"
          name="zipCode"
          value={this.state.zipCode}
          onChange={this.handleChange("name")}
          fullWidth
        />

        <button type="submit" value="Submit">
          Add Customer
        </button>
      </form>
    );
  }
}

export default CustomerFormContainer;