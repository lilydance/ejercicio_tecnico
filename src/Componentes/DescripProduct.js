import React from "react";
import Img from "../img/Footer/84981049_620107085435507_4260875787090681190_nlow.jpg";

// function handlerSwitchImage (e) {
//     document.getElementById("bigImage").src=e.target.src
// }

const DescripProduct = ({
  descripcion,
  sku,
  precio,
  categoria,
  imgs,
  name,
}) => {
  return (
    <div className="container d-block mx-auto my-3 py-3">
      <div className="row container justify-content-center">
        <div className="col-6 ajuste">
          <img
            className="img-fluid"
            id="bigImage"
            src={"/" + imgs[0]}
            alt="image.jpg"
            style={{ width: "300px", height: "auto" }}
          ></img>
          <div
            className="row my-3 g-1"
            style={{ maxWidth: "300px", height: "auto" }}
          >
            {/* {
              photos.map((item) => (
                <div className="col-3">
                  <img className="img-fluid" onClick={handlerSwitchImage} src={item}></img>
                </div>
              ))
              } */}
          </div>
        </div>
        <div className="col-6">
          <div className="row pt-3 justify-content-start">
            <div className="col-12 pb-3">
              <span className="price">price</span>
            </div>
            <div className="col-12 pb-3">range</div>
            <div className="col-12 pb-3">paragraph</div>
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <form>
                    <label>
                      <input
                        className="containerInput d-inline-block text-center bordes"
                        type="number"
                        name="number"
                        placeholder="0"
                        min="1"
                        pattern="^[1-9]+"
                      />
                      <button className="containerButton d-inline-block border border-0 ms-1">
                        <span>ADD TO CART</span>
                      </button>
                    </label>
                  </form>
                </div>
                <div className="col-9"></div>
              </div>
            </div>
            <span>Description</span>
            <div className="col-12 mt-3">
              <table class="table table-border bordes">
                <tbody>
                  <tr>
                    <td>SKU:</td>
                    <td>{sku}</td>
                  </tr>
                  <tr>
                    <td>Category:</td>
                    <td> {categoria}</td>
                  </tr>
                  <tr>
                    <td>Tags:</td>
                    <td>{name}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DescripProduct;
