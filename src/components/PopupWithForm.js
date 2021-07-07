import React from 'react';

function PopupWithForm({onClose, isOpen, name, title, buttonCaption, children}){
  return (
    <section className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name="edit-profile" noValidate>
          {children}
          <button className="popup__submit-button" type="submit">{buttonCaption}</button>
        </form>
        <button className="popup__close-button" type="button" onClick={onClose}></button>
      </div>
    </section>
  );
}

export default PopupWithForm;