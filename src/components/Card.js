import React from 'react';

function Card({card, userId, onCardClick}){

  const isMy = card.owner._id === userId;

  function handleClick(){
    onCardClick(card);
  }

  return(
    <div id={card._id} className="elements__element">
      <button className="elements__image-container" type="button" onClick={handleClick}>
        <img className="elements__image" src={card.link} alt={card.name}/>
      </button>
      <div className="elements__name-and-like">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__like-container">
          <button className="elements__like" type="button"></button>
          <span className="elements__like-counter">{card.likes.length}</span>
        </div>
      </div>
      <button className={`elements__remove ${isMy ? "elemenst__remove_type_active" : ""}`} type="button" disabled={!isMy}></button>
    </div>
  );
}

export default Card;