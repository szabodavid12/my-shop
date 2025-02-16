import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearProducts, getProductById } from "../store/actions/productAction";
import { RootState } from "../store/store";
import {
  dummySelector,
  selectProductById,
} from "../store/selectors/productSelector";
import ProductDetailsCard from "../components/productDetailsCard/ProductDetailsCard";
import Spinner from "../components/spinner/Spinner";

const Product = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector(
    id
      ? (state: RootState) => selectProductById(state, Number(id))
      : dummySelector
  );

  //todo megnézni hogy lehet namelni a useeffect funcitnoket
  useEffect(() => {
    if (id) {
      dispatch(getProductById(+id));
    }
  }, [id]);

  useEffect(() => {
    return () => {
      dispatch(clearProducts());
    };
  }, []);

  return product ? (
    <div className="h-screen flex grid lg:grid-cols-2 content-center px-[10rem]">
      <div>asd</div>
      <ProductDetailsCard
        title={product.title}
        rating={product?.rating ?? 0}
        discountPercentage={product?.discountPercentage}
        price={product?.price}
        stock={product?.stock ?? ""}
        brand={product?.brand ?? ""}
        category={product?.category ?? ""}
        description={product.description}
      />
    </div>
  ) : (
    <Spinner />
  );
};

export default Product;
