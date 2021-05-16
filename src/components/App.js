import defaultPlace from "../images/elements/Красноярск.jpg";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <>
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
        <section className="popup popup_type_edit">
          <div className="popup__container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form" name="edit-profile" noValidate>
              <input className="popup__input popup__input_first" id="name-input" type="text" name="name" value="" placeholder="Имя" minLength="2" maxLength="40" required/>
              <span className="popup__input-error name-input-error"></span>
              <input className="popup__input popup__input_second" id="about-input" type="text" name="about" value="" placeholder="О себе" minLength="2" maxLength="200" required/>
              <span className="popup__input-error about-input-error"></span>
              <button className="popup__submit-button" type="submit">Сохранить</button>
            </form>
            <button className="popup__close-button" type="button"></button>
          </div>
        </section>
        <section className="popup popup_type_add">
          <div className="popup__container">
            <h2 className="popup__title">Новое место</h2>
            <form className="popup__form" name="add-place" noValidate>
              <input className="popup__input popup__input_first" id="title-input" type="text" name="title" value="" placeholder="Название" minLength="2" maxLength="30" required/>
              <span className="popup__input-error title-input-error"></span>
              <input className="popup__input popup__input_second" id="link-input" type="url" name="link" value="" placeholder="Ссылка на картинку" required/>
              <span className="popup__input-error link-input-error"></span>
              <button className="popup__submit-button" type="submit">Создать</button>
            </form>
            <button className="popup__close-button" type="button"></button>
          </div>
        </section>
        <section className="popup popup_type_img">
          <div className="popup__figure-container">
            <figure className="popup__figure">
              <img className="popup__image" src={defaultPlace} alt="Красноярск"/>
              <figcaption className="popup__figcaption">Красноярск</figcaption>
            </figure>
            <button className="popup__close-button" type="button"></button>
          </div>
        </section>
        <section className="popup popup_type_delete-confirm">
          <div className="popup__container">
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="popup__form" name="delete-confirm" noValidate>
              <button className="popup__submit-button" type="submit">Да</button>
            </form>
            <button className="popup__close-button" type="button"></button>
          </div>
        </section>
        <section className="popup popup_type_change-avatar">
          <div className="popup__container">
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__form" name="change_avatar" noValidate>
              <input className="popup__input popup__input_first" id="avatar-input" type="url" name="avatar" value="" placeholder="Ссылка на аватар" required/>
              <span className="popup__input-error avatar-input-error"></span>
              <button className="popup__submit-button" type="submit">Сохранить</button>
            </form>
            <button className="popup__close-button" type="button"></button>
          </div>
        </section>
      </div>
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
    </>
  );
}

export default App;
