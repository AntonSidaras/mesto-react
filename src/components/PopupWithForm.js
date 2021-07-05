import React from 'react';

function PopupWithForm(props){
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name="edit-profile" noValidate>
          {props.children}
          <button className="popup__submit-button" type="submit">{props.buttonCaption}</button>
        </form>
        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
      </div>
    </section>
  );
}

export default PopupWithForm;