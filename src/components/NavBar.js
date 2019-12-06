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
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {this.props.user ? (
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    {this.props.user.username}’s list
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/logout"
                    className="nav-link"
                    onClick={() => this.props.logout()}
                    style={{ color: "#d12e72" }}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            ) : (
              <li className="nav-item ">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
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
