import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdOutlineWorkOutline, MdContacts } from "react-icons/md";
import { GrCopy } from "react-icons/gr";
const Navbar = () => {
  return (
    <aside>
      <nav className="App-navbar">
        <ul className="App-navbar__list">
          <li className="App-navbar__item">
            <Link to="/" className="App-navbar__link"><MdHome fontSize={30} /> <span>Home</span></Link>
          </li>
          <li className="App-navbar__item">
            <Link to="/resume" className="App-navbar__link"><GrCopy fontSize={30} /><span>Resume</span></Link>
          </li>
          <li className="App-navbar__item">
            <Link to="/work" className="App-navbar__link"> <MdOutlineWorkOutline fontSize={30} /><span>Work</span></Link>
          </li>
          <li className="App-navbar__item">
            <Link to="/contact" className="App-navbar__link"><MdContacts fontSize={30} /><span>Contact</span></Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
