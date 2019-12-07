import { connect } from "react-redux";
import React, { Component } from "react";

//actions
import { deleteItem, fetchItems } from "../redux/actions";

//components
import Loading from "./Loading";

class ItemCard extends Component {
  handleClick = id => {
    this.props.deleteItem(id);
  };

  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.props.fetchItems();
    }
  }

  render() {
    if (this.props.loading) return <Loading />;
    const item = this.props.item;
    return (
      <div className="col-lg-4 col-md-6 col-12 my-5">
        <div
          className="card"
          style={{ height: "280px", borderColor: "#d12e72", borderWidth: 2 }}
        >
          <div className="img mt-3">
            <img
              onClick={() => window.open(item.url, "_blank")}
              style={{ width: 200, height: 150, marginLeft: 70 }}
              className="card-img-top img-fluid"
              src={item.img}
              alt="Just the item"
            />
          </div>

          <div className="card-body">
            <h5
              className="card-title mt-5"
              style={{
                textAlign: "center",
                color: "#d12e72"
              }}
            >
              <span>{item.name}</span>
            </h5>
            {this.props.user && this.props.user.user_id === item.user ? (
              <button
                style={{
                  position: "absolute",
                  top: 225,
                  left: 270
                }}
              >
                <img
                  onClick={() => this.handleClick(item.id)}
                  src="https://cdn3.iconfinder.com/data/icons/objects/512/Bin-512.png"
                  alt="Just a delete button!!"
                  className="card-img"
                  style={{
                    fontSize: 10,
                    width: 30,
                    height: 30
                  }}
                />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.rootAuth.user,
  items: state.rootList.items,
  loading: state.rootList.loading
});

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems()),
    deleteItem: item => dispatch(deleteItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
