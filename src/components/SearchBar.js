import { connect } from "react-redux";
import React, { Component } from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//actions
import { filterItems } from "../redux/actions";

class SearchBar extends Component {
  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-5 my-5">
        <div
          className="input-group my-5"
          style={{ width: "800px", marginLeft: 100 }}
        >
          <input
            className="form-control"
            type="text"
            onChange={event => this.props.filterItems(event.target.value)}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterItems: query => dispatch(filterItems(query))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
