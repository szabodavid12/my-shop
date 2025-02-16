import { getCalculatedPrice } from "../../helper/priceHelper";
import DiscountLabel from "../productCard/DiscountLabel";
import Rating from "../ratingSection/RatingSection";

type ProductDetailsCardProps = {
  title: string;
  rating: number;
  discountPercentage: number;
  price: number;
  stock: string;
  brand: string;
  category: string;
  description: string;
};

const ProductDetailsCard = (props: ProductDetailsCardProps) => {
  const {
    title,
    rating,
    discountPercentage,
    price,
    stock,
    brand,
    category,
    description,
  } = props;

  return (
    <div className="flex flex-col">
      <span className="text-[48px] font-gsSemibold mt-[10px] leading-[64.8px]">
        {title}
      </span>
      <Rating rating={rating} />
      <div className="flex flex-col font-gsSMedium text-[24px] leading-[32.4px] opacity-60">
        <span>{description}</span>
        <span>{`Stock: ${stock}`}</span>
        <span>{`Brand: ${brand}`}</span>
        <span>{`Category: ${category}`}</span>
      </div>
      <DiscountLabel discountPercentage={discountPercentage} />
      <div className="flex grid grid-cols-2">
        <span className="whitespace-nowrap text-[64px] font-gsSemibold leading-[86.4px]">
          {getCalculatedPrice(price, discountPercentage)}
        </span>

        <AddToCartButton />
      </div>
    </div>
  );
};

const AddToCartButton = () => (
  <button className="w-full bg-black font-gsSemibold h-[65px] rounded-[30px] mt-[13px]">
    <span className="text-white leading-[37.8px] text-[28px]">Add to cart</span>
  </button>
);
// megnezni mi 60%
//todo ha mathecl a product title style itt is meg máshol is akk mergelni lehet e

export default ProductDetailsCard;
