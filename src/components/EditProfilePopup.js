import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose}) {

  return (
    <PopupWithForm 
      onClose={onClose} isOpen={isOpen} name="edit" 
      title="Редактировать профиль" buttonCaption="Сохранить"
      >
      <input 
        className="popup__input popup__input_first" id="name-input" 
        type="text" name="name" defaultValue="" placeholder="Имя" 
        minLength="2" maxLength="40" required
      />
      <span className="popup__input-error name-input-error"></span>
      <input 
        className="popup__input popup__input_second" id="about-input" 
        type="text" name="about" defaultValue="" placeholder="О себе" 
        minLength="2" maxLength="200" required/>
      <span className="popup__input-error about-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;