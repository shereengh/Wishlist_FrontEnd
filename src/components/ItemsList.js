import React from "react";
import { connect } from "react-redux";

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
        <div style={{ marginLeft: 200 }}></div>
        <div className="col-12" style={{ marginLeft: 200 }}>
          {uuid ? (
            <h3 style={{ marginTop: 50 }}>
              {" "}
              <span style={{ color: "#d12e72" }}>{name}’s</span> Wish List{" "}
            </h3>
          ) : null}
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
  items: state.rootList.items
});

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems()),
    fetchOthersItems: uuid => dispatch(fetchOthersItems(uuid))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
