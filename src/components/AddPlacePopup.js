import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose}) {

  return (
    <PopupWithForm 
      onClose={onClose} isOpen={isOpen} name="add" 
      title="Новое место" buttonCaption="Создать"
      >
      <input 
        className="popup__input popup__input_first" id="title-input" 
        type="text" name="title" defaultValue="" placeholder="Название" 
        minLength="2" maxLength="30" required
      />
      <span className="popup__input-error title-input-error"></span>
      <input 
        className="popup__input popup__input_second" id="link-input" 
        type="url" name="link" defaultValue="" placeholder="Ссылка на картинку" required
      />
      <span className="popup__input-error link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;