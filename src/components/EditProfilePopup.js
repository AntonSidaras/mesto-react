import React from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser, buttonCaption}) {

  const [user, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(event){
    setName(event.target.value);
  }

  function handleChangeDescription(event){
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    // Запрещаем браузеру переходить по адресу формы
    event.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: user,
      about: description
    });
  } 

  return (
    <PopupWithForm 
      onClose={onClose} onSubmit={handleSubmit} isOpen={isOpen} name="edit" 
      title="Редактировать профиль" buttonCaption={buttonCaption.others}
      >
      <input 
        className="popup__input popup__input_first" id="name-input" 
        type="text" name="name" value={user} placeholder="Имя" 
        minLength="2" maxLength="40" onChange={handleChangeName} required
      />
      <span className="popup__input-error name-input-error"></span>
      <input 
        className="popup__input popup__input_second" id="about-input" 
        type="text" name="about" value={description} placeholder="О себе" 
        minLength="2" maxLength="200" onChange={handleChangeDescription} required
      />
      <span className="popup__input-error about-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;