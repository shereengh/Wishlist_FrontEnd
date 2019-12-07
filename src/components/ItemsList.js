import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Components
import Loading from "./Loading";
import ItemCard from "./ItemCard";

//actions
import { fetchItems, fetchOthersItems } from "../redux/actions";

class ItemsList extends React.Component {
  componentDidMount = async () => {
    const uuid = this.props.match.params.uuid;
    if (!uuid) await this.props.fetchItems();
    else await this.props.fetchOthersItems(uuid);
  };

  render() {
    if (this.props.loading) return <Loading />;
    const uuid = this.props.match.params.uuid;
    let name;
    let allItems;
    if (!uuid) {
      allItems = this.props.items.map(item => (
        <ItemCard key={item.id} item={item} />
      ));
    } else {
      name =
        this.props.items[0].user.first_name +
        " " +
        this.props.items[0].user.last_name;
      allItems = this.props.items[0].user.items.map(item => (
        <ItemCard key={item.id} item={item} />
      ));
    }

    return (
      <div
        className="container  "
        style={{
          background: "white",
          position: "absolute",
          left: 0,
          top: 60,
          bottom: -1000
        }}
      >
        <div className="col-12" style={{ marginLeft: 200 }}>
          {uuid ? (
            <h3 style={{ marginTop: 50 }}>
              {" "}
              <span style={{ color: "#d12e72" }}>{name}’s</span> Wish List{" "}
            </h3>
          ) : (
            <h3>
              {" "}
              <span style={{ color: "#d12e72" }}>My </span>wishlist
            </h3>
          )}
          <div>
            {this.props.user &&
            (this.props.user.user_id === this.props.items[0].user ||
              this.props.user.user_id === this.props.items[0].user.id) ? (
              <Link to="/add/item">
                <img
                  src="https://png.pngtree.com/png-vector/20190419/ourlarge/pngtree-vector-add-icon-png-image_956621.jpg"
                  alt="Just an add button!!"
                  className="card-img"
                  style={{
                    fontSize: 10,
                    width: 30,
                    height: 30,
                    left: 1065,
                    top: 5,
                    position: "absolute"
                  }}
                />
              </Link>
            ) : null}
          </div>
          <div className="row">
            {this.props.loading ? <Loading /> : allItems}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.rootList.loading,
  items: state.rootList.items,
  user: state.rootAuth.user
});

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems()),
    fetchOthersItems: uuid => dispatch(fetchOthersItems(uuid))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
