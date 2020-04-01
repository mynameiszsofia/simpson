import React, { Component } from "react";
import "./SignUp.css";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConf: "",
      name: "",
      lastname: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(JSON.stringify(this.state, 1, 1));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h1>{JSON.stringify(this.state, 1, 1)}</h1>
          <input
            type="email"
            name="email"
            placeholder="test@test.com"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="password"
            onChange={event => this.setState({ password: event.target.value })}
          ></input>
          <input
            type="password"
            name="passwordConf"
            value={this.state.passwordConf}
            placeholder="password again"
            onChange={event =>
              this.setState({ passwordConf: event.target.value })
            }
          ></input>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name"
            onChange={event => this.setState({ name: event.target.value })}
          ></input>
          <input
            type="text"
            name="lastname"
            value={this.state.lastname}
            placeholder="lastname"
            onChange={event => this.setState({ lastname: event.target.value })}
          ></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default MyComponent;
