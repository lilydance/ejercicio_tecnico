import App from "./App";
import InfoApp from "./InfoApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:sku" element={<InfoApp />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Root;
