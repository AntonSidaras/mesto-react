import React from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, buttonCaption}) {

  const avatarRef = React.useRef();
  const [avatar, setAvatar] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  function handleChangeAvatar(){
    setAvatar(avatarRef.current.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  } 

  return (
    <PopupWithForm 
      onClose={onClose} onSubmit={handleSubmit} isOpen={isOpen} 
      name="change-avatar" title="Обновить аватар" buttonCaption={buttonCaption.others}
      >
      <input 
       className="popup__input popup__input_first" id="avatar-input" 
        type="url" name="avatar" value={avatar} placeholder="Ссылка на аватар"
        ref={avatarRef} onChange={handleChangeAvatar} required
      />
      <span className="popup__input-error avatar-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;