import React from "react";

function CardItem({ src, title, content, onClick }) {
  return (
    <li className="cardItem" onClick={onClick}> {/* 클릭 이벤트 추가 */}
      <img className="cardImage" src={src} alt={title} loading="lazy" />
      <div className="cardItemInfo">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardContent">{content}</p>
      </div>
    </li>
  );
}

export default CardItem;