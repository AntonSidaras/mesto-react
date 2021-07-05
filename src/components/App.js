import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Api from "../utils/Api";

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick(){
    setEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick(){
    setEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick(){
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups(){
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
  }

  return (
    <div className="page__content">
      <Header/>
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
      <Footer/>
      <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name="edit" title="Редактировать профиль" buttonCaption="Сохранить">
        <input className="popup__input popup__input_first" id="name-input" type="text" name="name" value="" placeholder="Имя" minLength="2" maxLength="40" required/>
        <span className="popup__input-error name-input-error"></span>
        <input className="popup__input popup__input_second" id="about-input" type="text" name="about" value="" placeholder="О себе" minLength="2" maxLength="200" required/>
        <span className="popup__input-error about-input-error"></span>
      </PopupWithForm>
      <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name="add" title="Новое место" buttonCaption="Создать">
        <input className="popup__input popup__input_first" id="title-input" type="text" name="title" value="" placeholder="Название" minLength="2" maxLength="30" required/>
        <span className="popup__input-error title-input-error"></span>
        <input className="popup__input popup__input_second" id="link-input" type="url" name="link" value="" placeholder="Ссылка на картинку" required/>
        <span className="popup__input-error link-input-error"></span>
      </PopupWithForm>
      <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name="change-avatar" title="Обновить аватар" buttonCaption="Сохранить">
        <input className="popup__input popup__input_first" id="avatar-input" type="url" name="avatar" value="" placeholder="Ссылка на аватар" required/>
        <span className="popup__input-error avatar-input-error"></span>
      </PopupWithForm>
      <PopupWithForm name="delete-confirm" title="Вы уверены?" buttonCaption="Да"/>
      <ImagePopup/>
    </div>
  );
}

export default App;