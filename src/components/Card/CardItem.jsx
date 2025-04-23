import React from "react";

function CardItem({ img, title, content }) {
  return (
    <li className="cardItem">
      <img className="cardImage" src={img} alt={img} loading="lazy" />
      <div className="cardItemInfo">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardContent">{content}</p>
      </div>
    </li>
  );
}

export default CardItem;