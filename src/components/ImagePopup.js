import React from 'react';

function ImagePopup(props){
  return(
    <section className={`popup popup_type_img ${props.card ? "popup_opened" : ""}`}>
      <div className="popup__figure-container">
        <figure className="popup__figure">
          <img className="popup__image" src={props.card ? props.card.link : ""} alt={props.card ? props.card.name : ""}/>
          <figcaption className="popup__figcaption">{props.card ? props.card.name : ""}</figcaption>
        </figure>
        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
       </div>
    </section>
  );
}

export default ImagePopup;