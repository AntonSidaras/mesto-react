import React from 'react';
import api from "../utils/api";

function Card(props){

  const [likes, setLike] = React.useState(props.card.likes.length);
  const [isLiked, setIsLiked] = React.useState(props.card.likes.some((like) => like._id === props.userId));
  const isMy = props.card.owner._id === props.userId;

  function handleClick(){
    props.onCardClick(props.card);
  }

  function toggleLikeCard(){
    if(isLiked){
      api.dislikeCard(props.card._id)
      .then((result) => {
        setIsLiked(false);
        setLike(result.likes.length);
      })
      .catch((error) => {
        alert(error);
      });
    }
    else{
      api.likeCard(props.card._id)
      .then((result) => {
        setIsLiked(true);
        setLike(result.likes.length);
      })
      .catch((error) => {
        alert(error);
      });
    }
  }

  function removeCard(){
    api.removeCard(props.card._id)
    .then(() => {
    })
    .catch((error) => {
      alert(error);
    });
  }

  return(
    <div id={props.card._id} className="elements__element">
      <button className="elements__image-container" type="button" onClick={handleClick}>
        <img className="elements__image" src={props.card.link} alt={props.card.name}/>
      </button>
      <div className="elements__name-and-like">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-container">
          <button className={`elements__like ${isLiked ? "elements__like_active" : ""}`} type="button" onClick={toggleLikeCard}></button>
          <span className="elements__like-counter">{likes}</span>
        </div>
      </div>
      <button className={`elements__remove ${isMy ? "elemenst__remove_type_active" : ""}`} type="button" disabled={!isMy} onClick={removeCard}></button>
    </div>
  );
}

export default Card;

//`elements__remove ${isMy ? "elemenst__remove_type_active" : ""}`

//disabled={isMy}
/*createCard({id, isMy=false, likes, userId}) {
    this._pictureElement = this._getPictureTemplate();
    this._pictureElement.setAttribute("id", id); //установка id элементов в вёрстку
    this._id = id;
    if (isMy){
      const removeElement = this._pictureElement.querySelector(".elements__remove");
      removeElement.classList.add("elemenst__remove_type_active");
      removeElement.removeAttribute("disabled");
    }
    this._setEventListeners();
    const pictureElementImage = this._getPictureElementImage();
    pictureElementImage.src = this._link;
    pictureElementImage.alt = this._name;
    this._pictureElement.querySelector(".elements__title").textContent = this._name;

    const pictureLikeCounter = this._pictureElement.querySelector(".elements__like-counter");

    const isLiked = likes.some((like) => like._id === userId);
    if (isLiked) { 
      this._likePicture();
    } 

    pictureLikeCounter.textContent = likes.length; //счётчик лайков

    return this._pictureElement;
  }
}
*/