import { connect } from "react-redux";
import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Home extends Component {
  render() {
    if (this.props.user) return <Redirect to="/ItemsList" />;

    return (
      <Link type="button" to="/login">
        Start your own wishlist!!
      </Link>
    );
  }
}

const mapStateToProps = state => ({
  user: state.rootAuth.user
});

export default connect(mapStateToProps)(Home);
