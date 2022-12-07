import React from "react";
import Logo from "../img/header/logo.png";
import Home from "../img/header/home-8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const LIST_VAR = [
  {
    name: "HOME",
    link:"/",
    img: Home
  },
  {
    name: "SHOP FEATURES",
    link: null,
    img: null
  },
  {
    name: "CLOTHES",
    link: null,
    img: null
  },
  {
    name: "PAGES",
    link: null,
    img: null
  },
  {
    name: "SHORTCODES",
    link: null,
    img: null
  },
  {
    name: "POST TYPES",
    link: null,
    img: null
  },
];
// const LIST_FONTAWESOME = [
//   {
//     id: faHeart,
//     detail: "0",
//   },
//   {
//     id: faShoppingCart,
    
//   },
//   {
//     id: faSearch,
    
//   },
// ];

export const Header = () => {
  return (
    <header>
      <div className="barra_superior container-fluid">
        <span>20% off all kidswear + free shipping you spend $60 or more</span>
      </div>
      <div className="d-block mx-auto margen">
        <a href="#">
          <div className="Logo">
            <img src={Logo} alt="" className="d-block mx-auto"></img>
          </div>
        </a>
        <div class="container mt-3">
          <ul className="nav justify-content-center">
            {
            LIST_VAR.map((item) => (
              <li className="nav-item position">
                <li className="nav-item position">
                 
                   <a  href ="#" className="nav-link menu nav-link selected Francois_One" to={"{item.link}"}>
                     {item.name}
                     </a>
                  
                </li>
                <img className="Home" src={item.img} alt=""></img>
              </li>
            ))
            }
              <li className="nav-item pt-2 m-2 ">
                <FontAwesomeIcon icon={faHeart} />
              </li>
              <li className="nav-item pt-2 m-2 position">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="details">0</span>
              </li>
              <li className="nav-item bg-dar pt-2 m-2 ">
                <FontAwesomeIcon icon={faSearch} />
              </li>
            
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
