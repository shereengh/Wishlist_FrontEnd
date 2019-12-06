import { connect } from "react-redux";
import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Home extends Component {
  render() {
    if (this.props.user) return <Redirect to="/items" />;

    return (
      <Link type="button" to="/login">
        <div
          className="mt-5 "
          style={{
            position: "relative",
            left: 550,
            top: 200,
            borderRadius: 30,
            padding: 10,
            background: "#d12e72"
          }}
        >
          <h3 style={{ color: "black" }}> Start your Wishlist!!</h3>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = state => ({
  user: state.rootAuth.user
});

export default connect(mapStateToProps)(Home);
