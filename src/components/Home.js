import { connect } from "react-redux";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    console.log(this.props.user);
    if (this.props.user) return <Redirect to="/ItemsList" />;

    return <button type="button">Start your own wishlist!!</button>;
  }
}

const mapStateToProps = state => ({
  user: state.rootAuth.user
});

export default connect(mapStateToProps)(Home);
