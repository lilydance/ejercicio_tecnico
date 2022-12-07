import React from "react";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-solid-svg-icons';

const FOOTER_IMG = require.context("../img/Footer");

const LIST_ITEM = [
  {
    name: "SHOP",
  },
  {
    name: "SALE",
  },
  {
    name: "GIRLS",
  },
  {
    name: "BOYS",
  },
  {
    name: "LOOKBOOK",
  },
  {
    name: "CONTACTS",
  },
];

export const Footer = () => {
  return (
    <footer class="container-fluid mt-5">
      <div className="foot container-fluid">
        <div className="row footer" style={{ height: "auto" }}>
          <div className="col-12 pt-5">
            <img
              className="d-block mx-auto margen"
              src={FOOTER_IMG("./logo_retina.png")}
              alt=""
              style={{ width: "120px", height: "auto" }}
            ></img>
          </div>
          <div className="col-12">
            <ul className="nav justify-content-center pt-3">
              {LIST_ITEM.map((item) => (
                <li className="nav-item">
                  <a className="nav-link  text-white" href="#">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12">
            <ul
              className="nav justify-content-center pt-3"
              style={{ fontSize: "180%" }}
            >
              <li className="nav-item">
                <a className="nav-link  text-white" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
