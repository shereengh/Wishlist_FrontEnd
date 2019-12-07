import { connect } from "react-redux";
import React, { Component } from "react";
import FileBase64 from "react-file-base64";

//actions
import { addItem } from "../redux/actions";
import Jumbotron from "react-bootstrap/Jumbotron";

class ItemForm extends Component {
  state = {
    user: this.props.user.user_id,
    name: "",
    img: null,
    url: "",
    status: "Not taken"
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addItem(this.state, this.props.history);
  };

  getFiles = async image => {
    await this.setState({ img: image.base64 });
  };

  render() {
    return (
      <>
        <Jumbotron
          className="x"
          style={{ background: "rgba(255, 255, 255, 0.71)" }}
        >
          <div style={{ paddingLeft: 600 }}>
            <form onSubmit={this.handleSubmit}>
              <div className="input-group mb-3">
                <div className="form-group">
                  <label>Item Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <FileBase64 multiple={false} onDone={this.getFiles} />
              <br />
              <br />
              <br />
              <div className="input-group mb-3">
                <div className="form-group">
                  <label>Shopping URL</label>
                  <input
                    type="text"
                    className="form-control"
                    name="url"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn  btn-block"
                      style={{ color: "white", backgroundColor: "#d12e72" }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Jumbotron>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.rootAuth.user
  };
};

const mapDispatchToProps = dispatch => ({
  addItem: (newItem, history) => dispatch(addItem(newItem, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
