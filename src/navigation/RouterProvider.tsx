import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductsOverview from "../screens/ProductsOverview";
import Product from "../screens/Product";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsOverview />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
