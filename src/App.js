import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//components
import ItemForm from "./components/ItemForm";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import ItemsList from "./components/ItemsList";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

class App extends Component {
  getView = () => {
    if (this.props.loading) return <Loading />;

    return (
      <Switch>
        <Route path="/home" component={Home} />

        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />

        <Route exact path="/items" component={ItemsList} />
        <Route path="/items/:uuid" component={ItemsList} />

        <Route path="/add/item" component={ItemForm} />

        <Redirect to="/home" />
      </Switch>
    );
  };

  render() {
    return (
      <>
        <div className=" mybackground">
          <div className="content col-12">
            <NavBar />
            {this.getView()}
          </div>
        </div>
      </>
    );
  }
}

export default App;
