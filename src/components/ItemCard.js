import React from "react";

function ItemCard(props) {
  const item = props.item;
  return (
    <div className="col-lg-4 col-md-6 col-12 my-5">
      <div className="card" style={{ height: "200px" }}>
        {/* <Link to={`/items/${item.id}`}> */}
        <div className="img">
          <img
            style={{ width: 200, height: 150, marginLeft: 50 }}
            className="card-img-top img-fluid"
            src={item.img}
            alt="Just the item"
          />
        </div>
        {/* </Link> */}
        <div className="card-body">
          <h5 className="card-title" style={{ textAlign: "center" }}>
            <span>{item.name}</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
