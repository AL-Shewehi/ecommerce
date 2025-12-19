import React from "react";

function CardCategory({ item }) {
  return (
    <div className=" d-flex flex-column align-items-center gap-2" style={{cursor: "pointer"}}>
      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ width: "120px", height: "120px", borderRadius: "50%", background: "#F5F5F5", margin: "0 auto", overflow: "hidden" }}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{ height: "100px", objectFit: "contain" }}
        />
      </div>
      <div className="">
        <h6>{item.name}</h6>
      </div>
    </div>
  );
}

export default CardCategory;
