import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//components
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import ItemsList from "./components/ItemsList";

class App extends Component {
  getView = () => {
    if (this.props.loading) return <Loading />;

    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/items" component={ItemsList} />

        <Redirect to="/items" />
      </Switch>
    );
  };

  render() {
    return (
      <div className="content col-10">
        <NavBar />
        {this.getView()}
      </div>
    );
  }
}

export default App;
