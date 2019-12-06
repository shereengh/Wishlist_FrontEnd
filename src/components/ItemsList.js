import React from "react";
import { connect } from "react-redux";

// Components
import Loading from "./Loading";
import ItemCard from "./ItemCard";
import Searchbar from "./SearchBar";

//actions
import { fetchItems } from "../redux/actions";

class ItemsList extends React.Component {
  componentDidMount = async () => {
    await this.props.fetchItems();
  };

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

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
