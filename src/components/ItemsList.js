import React from "react";
import { connect } from "react-redux";

// Components
import Loading from "./Loading";
import ItemCard from "./ItemCard";
import Searchbar from "./SearchBar";

class ItemsList extends React.Component {
  render() {
    const allItems = this.props.filteredItems.map(item => (
      <ItemCard key={item.id} item={item} />
    ));
    return (
      <div className="container my-5 mx-5">
        <Searchbar />
        <div className="col-12 my-5 center mx-5">
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
  filteredItems: state.rootList.filteredItems
});

export default connect(mapStateToProps)(ItemsList);
