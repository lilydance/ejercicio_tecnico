import React from "react";
import { Link } from "react-router-dom";
import Img from "../img/Footer/84981049_620107085435507_4260875787090681190_nlow.jpg";
import lista from "../resources.json";

let PLAIN_LIST = [];
for (let i = 0; i < lista.resources.length; i++) {
  PLAIN_LIST = PLAIN_LIST.concat(lista.resources[i].products);
}

function aleatoria(l, amount = 9) {
  const x = l.sort(() => (Math.random() > 0.5 ? 1 : -1));
  const imgAleatorias = l.slice(0, amount);
  return imgAleatorias;
}

export const InfoProduct = ({
  descripcion,
  sku,
  precio,
  categoria,
  rango,
  sexo,
  imgs,
}) => {
  return (
    <div className="container d-block mx-auto my-3 py-3">
      <div className="row container justify-content-center">
        <ul className="nav  justify-content-center" id="myTab" role="tablist">
          <li className="nav-item sections" role="presentation">
            <button
              className="nav-link active buttonPersonalize"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <span> DESCRIPTION</span>
            </button>
          </li>
          <li className="nav-item sections" role="presentation">
            <button
              className="nav-link buttonPersonalize"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              <span>ADDITIONAL INFORMATION</span>
            </button>
          </li>
          <li className="nav-item sections" role="presentation">
            <button
              className="nav-link buttonPersonalize"
              id="messages-tab"
              data-bs-toggle="tab"
              data-bs-target="#messages"
              type="button"
              role="tab"
              aria-controls="messages"
              aria-selected="false"
            >
              <span>REVIEWS(1)</span>
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className="tab-pane active my-5"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Delectus, unde porro debitis soluta veritatis perspiciatis, iste
              eaque id atque expedita nam! Inventore tenetur, quia commodi
              asperiores deserunt laboriosam aliquid, porro voluptatibus autem,
              magnam natus? Error officiis hic enim minima praesentium obcaecati
              inventore, architecto deleniti sequi reprehenderit voluptate iure
              molestiae nulla!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              voluptate quasi nemo minima eveniet doloribus facere, veniam
              cupiditate cum facilis blanditiis! Voluptatum mollitia, a eos
              praesentium excepturi pariatur nemo, voluptate, laborum illo
              dolore quaerat culpa. Quaerat dolore quis minima, voluptatibus
              nemo labore repudiandae placeat molestias eos similique hic,
              aperiam ipsa consequatur. Quos inventore qui maxime corporis enim,
              corrupti nam omnis minima debitis quasi vero placeat sapiente!
              Vero dolorum earum recusandae accusantium reiciendis? Dolorum nisi
              nesciunt facere rem quis ducimus exercitationem?
            </p>
          </div>
          <div
            className="tab-pane"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            <table className="table table-border bordes my-5">
              <tbody>
                <tr>
                  <td>Color:</td>
                  <td>color</td>
                </tr>
                <tr>
                  <td>Materials:</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="tab-pane"
            id="messages"
            role="tabpanel"
            aria-labelledby="messages-tab"
            tabindex="0"
          ></div>
        </div>
      </div>

      <div className="row container mt-5">
        <div className="col-12">
          <div className="row d-flex mx-auto " style={{ maxWidth: "85%" }}>
            {Array.prototype.map.call(aleatoria(PLAIN_LIST, 4), (item) => {
              return (
                <div className="col-3 col-3">
                  <Link to={`/product/${item.sku}`}>
                    <img
                      className="img-fluid related-products d-block mx-auto hover"
                      src={"/" + item.imgs[0]}
                      alt="related-img.jpg"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-12 text-center">
          <div
            className="row d-flex mx-auto text-center "
            style={{ maxWidth: "85%" }}
          >
            <div className="col-3">
              <span className="girls">categories</span>
            </div>
            <div className="col-3">
              <span className="girls">categories</span>
            </div>
            <div className="col-3">
              <span className="girls">categories</span>
            </div>
            <div className="col-3">
              <span className="girls">categories</span>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div
            className="row d-flex mx-auto text-center "
            style={{ maxWidth: "85%" }}
          >
            <div className="col-3">
              <span className="Gilda_Display">description</span>
            </div>
            <div className="col-3">
              <span className="Gilda_Display">description</span>
            </div>
            <div className="col-3">
              <span className="Gilda_Display">description</span>
            </div>
            <div className="col-3">
              <span className="Gilda_Display">description</span>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div
            className="row d-flex mx-auto text-center"
            style={{ maxWidth: "85%" }}
          >
            <div className="col-3">
              <span className="price">price</span>
            </div>
            <div className="col-3">
              <span className="price">price</span>
            </div>
            <div className="col-3">
              <span className="price">price</span>
            </div>
            <div className="col-3">
              <span className="price">price</span>
            </div>
          </div>
        </div>
        <div className="col-12"></div>
      </div>
    </div>
  );
};
export default InfoProduct;
