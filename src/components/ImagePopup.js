import defaultPlace from "../images/elements/Красноярск.jpg";
import React from 'react';

function ImagePopup(){
  return(
    <section className="popup popup_type_img">
      <div className="popup__figure-container">
        <figure className="popup__figure">
          <img className="popup__image" src={defaultPlace} alt="Красноярск"/>
          <figcaption className="popup__figcaption">Красноярск</figcaption>
        </figure>
        <button className="popup__close-button" type="button"></button>
       </div>
    </section>
  );
}

export default ImagePopup;