import React, { Component } from "react";
import "./SignUp.css";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConf: "",
      name: "",
      lastname: "",
      flash: "",
      snackbaropen: false,
      snackbarmsg: "",
    };
  }

  snackbarClose = (event) => {
    this.setState({ snackbaropen: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state, 1, 1));
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then(
        (res) =>
          this.setState({
            flash: res.flash,
            snackbaropen: true,
            snackbarmsg: res.flash,
          }),
        (err) =>
          this.setState({
            flash: err.flash,
            snackbaropen: true,
            snackbarmsg: err.flash,
          })
      );
  };

  render() {
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={this.state.snackbaropen}
          autoHideDuration={3000}
          onClose={this.snackbarClose}
          message={<span id="message-id">{this.state.snackbarmsg}</span>}
        />
        <form onSubmit={this.handleSubmit}>
          {/* <h1>{JSON.stringify(this.state, 1, 1)}</h1> */}
          <TextField
            type="email"
            name="email"
            label="E-mail"
            placeholder="test@test.com"
            value={this.state.email}
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <br />
          <TextField
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            placeholder="password"
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
          <br />
          <TextField
            type="password"
            name="passwordConf"
            label="Password again"
            value={this.state.passwordConf}
            placeholder="password again"
            onChange={(event) =>
              this.setState({ passwordConf: event.target.value })
            }
          />
          <br />
          <TextField
            type="text"
            name="name"
            label="First name"
            value={this.state.name}
            placeholder="name"
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <br />
          <TextField
            type="text"
            name="lastname"
            label="Last name"
            value={this.state.lastname}
            placeholder="lastname"
            onChange={(event) =>
              this.setState({ lastname: event.target.value })
            }
          />
          <br />
          <br />
          <Button type="submit" value="Submit" variant="outlined">
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
