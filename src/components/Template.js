import defaultPlace from "../images/elements/Красноярск.jpg";
<template id="picture-template">
  <div className="elements__element">
    <button className="elements__image-container" type="button">
      <img className="elements__image" src={defaultPlace} alt="Красноярск"/>
    </button>
    <div className="elements__name-and-like">
      <h2 className="elements__title">Красноярск</h2>
       <div className="elements__like-container">
         <button className="elements__like" type="button"></button>
         <span className="elements__like-counter">0</span>
       </div>
    </div>
    <button className="elements__remove" type="button" disabled></button>
  </div>
</template>