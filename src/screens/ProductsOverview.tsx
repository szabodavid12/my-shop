import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/productCard/ProductCard";
import { getProducts } from "../store/actions/productAction";
import {
  selectProducts,
  selectTotalProducts,
} from "../store/selectors/productSelector";
import InfiniteScroll from "react-infinite-scroller";
import Spinner from "../components/spinner/Spinner";

const LOADING_TRIGGER_THRESHOLD_IN_PX = 500;

const ProductsOverview = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const totalProducts = useSelector(selectTotalProducts);

  return (
    <InfiniteScroll
      loadMore={() => dispatch(getProducts())}
      hasMore={totalProducts === undefined || products.length < totalProducts}
      threshold={LOADING_TRIGGER_THRESHOLD_IN_PX}
      loader={
        <div key={"spinner-0"}>
          <Spinner />
        </div>
      }
    >
      <h1 className="py-[50px] font-gsSemibold text-[48px] text-center">
        See Products
      </h1>
      <div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 px-[6rem]">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              discountPercentage={product.discountPercentage}
              coverImage={product.thumbnail}
            />
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default ProductsOverview;
