import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//actions
import { logout } from "../redux/actions";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {this.props.user ? (
              <Link
                to="/logout"
                className="btn btn-link my-2 my-sm-0"
                onClick={() => this.props.logout()}
                style={{ color: "#8aac8a" }}
              >
                Logout
              </Link>
            ) : (
              <Link to="/login" className="login btn-link">
                Login
              </Link>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  user: state.rootAuth.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
