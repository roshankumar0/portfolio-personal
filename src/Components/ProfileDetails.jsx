import React from 'react';
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub, BsPhone } from "react-icons/bs";
import { TiMessages, TiLocation } from "react-icons/ti";
import { GoDownload } from "react-icons/go";
import { Link } from 'react-router-dom';

const ProfileDetails = () => {
  return (
    <section className="App-profile">
      <figure className="App-profile__image">
        <img src="https://scontent.fdel1-6.fna.fbcdn.net/v/t1.6435-9/126862362_107806804489970_3006559736978829605_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-X4sT_XiUC0Q7kNvgGBoFio&_nc_ht=scontent.fdel1-6.fna&oh=00_AYBphNM8UDt856vPI0COEcaXdOrsOqWbzqMJhS6evY--6g&oe=66C898FD" />
        <figcaption><h2 className="App-profile__title">Beatrice Wambui</h2></figcaption>
      </figure>
      <header>
        
        <p className="App-profile__career">FullStack Developer</p>
      </header>
      <nav className="App__social">
        <ul className="App__social__list">
          <li className="App__social__item">
            <Link to={'/'} aria-label="Facebook"><BsFacebook /></Link>
          </li>
          <li className="App__social__item">
            <Link to={'/'} aria-label="LinkedIn"><BsLinkedin /></Link>
          </li>
          <li className="App__social__item">
            <Link to={'/'} aria-label="Twitter"><BsTwitter /></Link>
          </li>
          <li className="App__social__item">
            <Link to={'/'} aria-label="GitHub"><BsGithub /></Link>
          </li>
        </ul>
      </nav>
      <main className="App__contact">
        <ul className="App__contact__card">
          <li className="App__contact__info">
            <BsPhone />
            <span>
              <strong>Phone:</strong>
              <span>+91-9650730925</span>
            </span>
          </li>
          <li className="App__contact__info">
            <TiMessages />
            <span>
              <strong>Email:</strong>
              <span>beatricewambuimbugua@gmail.com</span>
            </span>
          </li>
          <li className="App__contact__info">
            <TiLocation />
            <span>
              <strong>Location:</strong>
              <span></span>
            </span>
          </li>
        </ul>
      </main>
      <footer className="App__resume">
        <Link to={'/'}><GoDownload /></Link> 
        <button>Download Resume</button>
      </footer>
    </section>
  );
}

export default ProfileDetails;
