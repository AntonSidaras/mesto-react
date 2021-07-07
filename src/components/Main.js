import profilePhoto from "../images/profile/Avatar.png"
import React from 'react';
import Card from "./Card";
import api from "../utils/api";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [userName, setUserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = React.useState("Исследователь Океана");
  const [userAvatar, setUserAvatar] = React.useState(profilePhoto);
  const [userId, setUserId] = React.useState(0);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {

    api.getUserInfo()
    .then((result) => {
      setUserName(result.name);
      setUserDescription(result.about);
      setUserAvatar(result.avatar);
      setUserId(result._id);
    })
    .catch((error) => {
     alert(error);
    });

    api.getInitialCards()
    .then((result) => {
      setCards(result);
    })
    .catch((error) => {
      alert(error);
    });

  }, []);

  return (
    <main>
      <section className="profile">
        <button className="profile__avatar-button" type="button" onClick={onEditAvatar}>
          <div className="profile__avatar-overlay"></div>
          <img className="profile__avatar" src={userAvatar} alt="Фото профиля"/>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((item) => (
          <Card key={item._id} card={item} userId={userId} onCardClick={onCardClick}/>
        ))}
      </section>
    </main>
    
  );
}

export default Main;