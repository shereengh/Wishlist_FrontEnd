import { connect } from "react-redux";
import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Home extends Component {
  render() {
    if (this.props.user) return <Redirect to="/items" />;

    return (
      <Link
        to="/login"
        style={{
          color: "black",
          position: "relative",
          left: 850,
          top: 350,
          padding: 10,
          fontWeight: "bold",
          fontSize: "24px"
        }}
      >
        Click <span style={{ color: "#d12e72" }}>Here</span> to start your own
        wishlist !!
      </Link>
    );
  }
}

const mapStateToProps = state => ({
  user: state.rootAuth.user
});

export default connect(mapStateToProps)(Home);
