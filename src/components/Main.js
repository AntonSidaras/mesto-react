import profilePhoto from "../images/profile/Avatar.png"
import React from 'react';

function handleEditAvatarClick(){

}

function handleEditProfileClick(){

}

function handleAddPlaceClick(){

}

function Main() {
  return (
    <main>
      <section className="profile">
        <button className="profile__avatar-button" type="button" onClick={handleEditAvatarClick}>
          <div className="profile__avatar-overlay"></div>
          <img className="profile__avatar" src={profilePhoto} alt="Фото профиля"/>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
          <p className="profile__about">Исследователь океана</p>
        </div>
        <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements">
      </section>
    </main>
  );
}

export default Main;