import React from 'react';
import "./UserBoat.css";
import Navbar from './Navbar';
import Sidebar from './SideBar';
import Footer from './Footer';

const UserBoat = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    

    <ul className="cards">
      <CardItem
        imageClass="card__image--fence"
        title="pedal boat 2-Seater"
        text="We are always able to support you so that you have a hassle free experience."
      />
      <CardItem
        imageClass="card__image--river"
        title="pedal boat-8 seater"
        text="We are always able to support you so that you have a hassle free experience."
      />
      <CardItem
        imageClass="card__image--record"
        title="Motor boat-2s eater"
        text="This defines the ability for a flex item to shrink if necessary. Negative numbers are invalid."
      />
      <CardItem
        imageClass="card__image--flowers"
        title="8 seater motorboat"
        text=" We are always able to support you so that you have a hassle free experience. default size of an element before the remaining space is distributed.'"
      />
      <CardItem
        imageClass="card__image--fence"
        title="Cycle boat"
        text="This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto."
      />
      <CardItem
        imageClass="card__image--fence"
        title="Flex"
        text="This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto."
      />
      
    </ul>
    <Footer/>
    
    </>
  );
};

const CardItem = ({ imageClass, title, text }) => {
  return (
    <li className="cards__item">
      <div className="card">
        <div className={`card__image ${imageClass}`}></div>
        <div className="card__content">
          <div className="card__title">{title}</div>
          <p className="card__text">{text}</p>
          <button className="btt">Book</button>
        </div>
      </div>
    </li>
  );
};

export default UserBoat;
