import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose}) {

  return (
    <PopupWithForm 
      onClose={onClose} isOpen={isOpen} 
      name="change-avatar" title="Обновить аватар" buttonCaption="Сохранить"
      >
      <input 
       className="popup__input popup__input_first" id="avatar-input" 
        type="url" name="avatar" defaultValue="" placeholder="Ссылка на аватар" required
      />
      <span className="popup__input-error avatar-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;