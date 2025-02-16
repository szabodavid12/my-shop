import { useDispatch } from "react-redux";
import ProductCard from "../components/productCard/ProductCard";
import { useEffect } from "react";

const ProductsOverview = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className="pb-[50px]">
      <h1 className=" font-gsSemibold text-[48px] text-center">See Products</h1>
      <ProductCard
        title="Title"
        description="desc"
        price="123"
        discount="1123"
      />
    </div>
  );
};

export default ProductsOverview;
