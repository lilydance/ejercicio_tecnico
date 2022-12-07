import React from "react";
//import { LIST_PRODUCT } from '../resources.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart } from "@fortawesome/free-regular-svg-icons";
import Home from "../img/header/home-8.png";
import lista from "../resources.json";
import { BrowserRouter as Router, Link } from "react-router-dom";

let PLAIN_LIST = [];
for (let i = 0; i < lista.resources.length; i++) {
  PLAIN_LIST = PLAIN_LIST.concat(lista.resources[i].products);
}

const FOOTER_IMG = require.context("../img/Footer");

function aleatoria(l, amount = 9) {
  const x = l.sort(() => (Math.random() > 0.5 ? 1 : -1));
  const imgAleatorias = l.slice(0, amount);
  return imgAleatorias;
}

export const Productos = () => {
  return (
    <div
      className="container-fluid d-block mx-auto mt-5"
      style={{ width: "90%" }}
    >
      <span className=" text-center d-block mx-auto mt-3 color Francois_One">
        NEW ARRIVALS
      </span>
      <img src={Home} alt="" className="d-block mx-auto mb-5"></img>
      <div className="row">
        <div className="col-3">
          <div className="row">
            <div className="col-10">
              <form action="" class="navbar-form navbar-left">
                <div className="input-group">
                  <input
                    type="Search"
                    placeholder="Search products.."
                    className="form-control"
                  />
                  <div className="searchBackground">
                    <i className="fa fa-search search py-2 px-2"></i>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row container-fluid text-start bordes mt-5">
            <span className=" ms-0 mt-3 Francois_One color ">CATEGORIES</span>
            <div className="categories py-3">
              {lista.resources.map((item) => (
                <div className="row">
                  <div className="col-3 ">
                    <a href="#" class="categ text-start">
                      For {item.category}
                    </a>
                  </div>
                  <div className="col-9 text-end">
                    <span className="Gilda_Display">{item.number}</span>
                  </div>
                  <hr className="mt-2" />
                </div>
              ))}
            </div>
          </div>
          <div className="row container-fluid text-start bordes mt-5 ">
            <span className=" ms-0 mt-3 Francois_One color">BEST SELLERS</span>
            <div className=" py-3 categories">
              {Array.prototype.map.call(aleatoria(PLAIN_LIST, 4), (item) => (
                <div className="row">
                  <div className="col-3">
                    <img
                      src={item.imgs[0]}
                      alt=""
                      style={{
                        Width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    ></img>
                  </div>
                  <div className="col-9 text-start">
                    <div className="row container-fluid">
                      <div className="col-12">
                        <a href="#" className="hover Quicksand ">
                          {item.name}
                        </a>
                      </div>
                      <div className="col-12">
                        <a href="#" className="hover Quicksand ">
                          {item.rating}
                        </a>
                      </div>
                      <div className="col-12">
                        <a href="#" className="hover Quicksand">
                          {item.price}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row container-fluid text-start ">
            <div className=" py-3 ">
              <div className="row mt-5">
                <div
                  class="col-12 text-center pt-3 pb-3"
                  style={{ backgroundColor: "coral" }}
                >
                  <span className="newletters">Join Our Newletter</span>
                  <form action="/action_page.php" className="text-start">
                    <div className="mb-3 mt-3">
                      <input
                        type="email"
                        className="form-control text-white"
                        id="email"
                        placeholder="Your Email Address"
                        name="email"
                        style={{ backgroundColor: "coral" }}
                      ></input>
                    </div>
                  </form>
                  <div className="col-12 envoltorio text-center py-1 px-1 bg-white">
                    <span className="suscribe">
                      <a href="#">SUSCRIBE</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="row mb-3">
            {Array.prototype.map.call(aleatoria(PLAIN_LIST), (item) => (
              <div className="col-4">
                <Link to={`/product/${item.sku}`}>
                  <img src={item.imgs[0]} alt="" className="img-fluid"></img>
                </Link>
                <div className=" text-center add_car1">
                  <a
                    href="#"
                    className="hover Francois_One"
                    style={{ fontSize: "82%", color: "coral" }}
                  >
                    <div
                      className="py-2 animation add_car"
                      style={{ background: "coral", position: "relative" }}
                    >
                      <div className="bordes mx-3 py-2 ">
                        <i className="fa fa-heart me-3 colorIcon"></i>
                        <span style={{ fontFamily: "Francois_One" }}>
                          ADD TO CAR
                        </span>
                        <i className=" colorIcon fa fa-search ms-3"></i>
                      </div>
                    </div>
                    {item.category}
                  </a>
                </div>
                <div className="text-center">
                  <a href="#" className="hover Gilda_Display color">
                    {item.name}
                  </a>
                </div>
                <div className="text-center">
                  <a href="#" className="hover Francois_One precio">
                    {item.price}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        class="container text-center"
        style={{ width: "100%", height: "auto" }}
      >
        <span class="sections d-block color Francois_One">
          INSTAGRAM @KIDSRUN
        </span>
        <img src={Home} alt="" className="d-block mx-auto"></img>
        <div class="row  mt-3">
          <div class="col-12 py-3">
            <div className="row g-0 container">
              {/* HACER LISTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */}
              <div
                className="col-2 d-inline-block mx-auto hover"
                style={{ width: "210px", height: "auto" }}
              >
                <img
                  className="img-fluid"
                  src={FOOTER_IMG(
                    "./87339849_530805007551424_292323017375800029_nlow.jpg"
                  )}
                  alt=""
                ></img>
              </div>
              <div
                className="col-2 d-inline-block mx-auto hover"
                style={{ width: "210px", height: "auto" }}
              >
                <img
                  className="img-fluid"
                  src={FOOTER_IMG(
                    "./87413583_2660130777540405_5722961474466513534_nlow.jpg"
                  )}
                  alt=""
                ></img>
              </div>
              <div
                className="col-2 d-inline-block mx-auto hover"
                style={{ width: "210px", height: "auto" }}
              >
                <img
                  className="img-fluid"
                  src={FOOTER_IMG(
                    "./85069033_185901059177965_6767010623440980864_nlow.jpg"
                  )}
                  alt=""
                ></img>
              </div>
              <div
                className="col-2 d-inline-block mx-auto hover"
                style={{ width: "210px", height: "auto" }}
              >
                <img
                  className="img-fluid"
                  src={FOOTER_IMG(
                    "./84981049_620107085435507_4260875787090681190_nlow.jpg"
                  )}
                  alt=""
                ></img>
              </div>
              <div
                className="col-2 d-inline-block mx-auto hover"
                style={{ width: "210px", height: "auto" }}
              >
                <img
                  className="img-fluid"
                  src={FOOTER_IMG(
                    "./85051426_2060664737412512_8458893884651247910_nlow.jpg"
                  )}
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Productos;
