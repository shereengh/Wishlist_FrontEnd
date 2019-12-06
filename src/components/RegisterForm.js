import { connect } from "react-redux";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

//actions
import { signup } from "../redux/actions";

class Signup extends Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    redirect: false,
    contact: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state, this.props.history);
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    const { username, password } = this.state;
    if (this.props.user)
      return (
        <div>
          <Redirect to="/" />;
        </div>
      );
    return (
      <Jumbotron className="x">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              id="username"
              value={username}
              name="username"
              placeholder="Username.."
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="first_name">First Name</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              id="first_name"
              name="first_name"
              placeholder="First Name.."
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="last_name">Last Name</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              id="last_name"
              name="last_name"
              placeholder="Last Name.."
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="e-mail">E-mail</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email.."
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              className="form-control"
              id="password"
              value={password}
              name="password"
              placeholder="Password.."
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            id="btn"
            onClick={this.setRedirect}
          >
            Signup
          </Button>
        </Form>
      </Jumbotron>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: (userData, history) => dispatch(signup(userData, history))
});

const mapStateToProps = state => ({
  user: state.rootAuth.user
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
