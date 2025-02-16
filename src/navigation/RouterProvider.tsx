import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductsOverview from "../screens/ProductsOverview";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsOverview />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
