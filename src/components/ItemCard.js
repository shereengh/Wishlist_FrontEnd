import React from "react";

function ItemCard(props) {
  const item = props.item;
  return (
    <div className="col-lg-4 col-md-6 col-12 my-5">
      <div className="card" style={{ height: "200px", borderRadius: 35 }}>
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
        <div
          className="card-body"
          style={{
            background: "#e0e0e0",
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35
          }}
        >
          <h5
            className="card-title"
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
