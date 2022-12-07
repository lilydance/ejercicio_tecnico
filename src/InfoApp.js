import "./App.css";
import Header from "./Componentes/Header_index";
import DescripProducto from "./Componentes/DescripProduct";
import Footer from "./Componentes/Footer";
import InfoProduct from "./Componentes/InfoProduct";
import { useParams } from "react-router-dom";
import lista from "./resources.json";

let PLAIN_LIST = [];
for (let i = 0; i < lista.resources.length; i++) {
  PLAIN_LIST = PLAIN_LIST.concat(lista.resources[i].products);
}

const InfoApp = () => {
  const { sku } = useParams();
  const data = PLAIN_LIST.find((item) => item.sku === sku);

  return (
    <div className="App">
      <Header />
      <DescripProducto
        categoria={data.category}
        imgs={data.imgs}
        descripcion={data.description}
      />
      <InfoProduct
        categoria={data.category}
        descripcion={data.description}
        sku={data.sku}
        imgs={data.imgs}
        precio={data.price}
        nombre={data.name}
        rango={data.rating}
      />
      <Footer />
    </div>
  );
};

export default InfoApp;
