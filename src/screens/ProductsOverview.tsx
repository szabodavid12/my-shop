import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/productCard/ProductCard";
import { useEffect } from "react";
import { getProducts } from "../store/actions/productAction";
import { selectProducts } from "../store/selectors/productSelector";

const ProductsOverview = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="pb-[50px]">
      <h1 className=" font-gsSemibold text-[48px] text-center">See Products</h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          discount={product.discountPercentage}
          coverImage={product.thumbnail}
        />
      ))}
    </div>
  );
};

export default ProductsOverview;
