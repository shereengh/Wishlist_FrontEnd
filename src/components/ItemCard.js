import React from "react";

function ItemCard(props) {
  const item = props.item;
  return (
    <div className="col-lg-4 col-md-6 col-12 my-5">
      <div
        className="card"
        style={{ height: "280px", borderColor: "#d12e72", borderWidth: 2 }}
      >
        <div className="img mt-3">
          <img
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
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
