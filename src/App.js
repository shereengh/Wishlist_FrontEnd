import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//components
import Loading from "./components/Loading";
import ItemsList from "./components/ItemsList";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

class App extends Component {
  getView = () => {
    if (this.props.loading) return <Loading />;

    return (
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/items" component={ItemsList} />

        <Redirect to="/items" />
      </Switch>
    );
  };

  render() {
    return (
      <>
        <div className=" mybackground">
          <div className="content col-10">
            <NavBar />
            {this.getView()}
          </div>
        </div>
      </>
    );
  }
}

export default App;
