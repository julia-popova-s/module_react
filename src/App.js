import "./styles/reset.css";
import "./styles/variables.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BasketPage from "./components/pages/basketPage";
import ProductsPage from "./components/pages/productsPage";
import NotFound from "./components/pages/notFoundPage/";
import ProductPage from "./components/pages/productPage";
import FormPage from "./components/pages/formPage";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const userAutho = localStorage.getItem("userAutho");
  useEffect(() => {
    if (userAutho === true) {
      navigate("/products");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/:id/:name" element={<ProductPage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/:id" element={<FormPage />} />
    </Routes>
  );
}

export default App;
