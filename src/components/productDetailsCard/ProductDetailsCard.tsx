import { getCalculatedPrice } from "../../helper/priceHelper";
import DiscountLabel from "../discountLabel/DiscountLabel";
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
      <Header title={title} rating={rating} />
      <Details
        description={description}
        stock={stock}
        brand={brand}
        category={category}
      />
      <DiscountLabel
        containerClassName="px-[25px] py-[10px] rounded-[20px] w-fit text-[20px] leading-[27px]"
        discountPercentage={discountPercentage}
      />
      <div className="flex grid grid-cols-2">
        <Price price={price} discountPercentage={discountPercentage} />
        <AddToCartButton />
      </div>
    </div>
  );
};

type HeaderProps = {
  title: string;
  rating: number;
};

const Header = (props: HeaderProps) => (
  <div className="flex justify-between">
    <span className="text-[48px] font-gsSemibold leading-[64.8px]">
      {props.title}
    </span>
    <Rating rating={props.rating} />
  </div>
);

type DetailsProps = {
  description: string;
  stock: string;
  brand: string;
  category: string;
};

const Details = (props: DetailsProps) => (
  <div className="flex flex-col font-gsSMedium text-[24px] leading-[32.4px] mt-[10px]">
    <span>{props.description}</span>
    <div className="flex flex-col opacity-60 gap-[15px] my-[15px]">
      <span>{`Stock: ${props.stock}`}</span>
      <span>{`Brand: ${props.brand}`}</span>
      <span>{`Category: ${props.category}`}</span>
    </div>
  </div>
);

type PriceProps = {
  price: number;
  discountPercentage: number;
};

const Price = (props: PriceProps) => (
  <span className="whitespace-nowrap text-[64px] font-gsSemibold leading-[86.4px]">
    {getCalculatedPrice(props.price, props.discountPercentage)}
  </span>
);

const AddToCartButton = () => (
  <button className="w-full bg-black font-gsSemibold h-[65px] rounded-[30px] mt-[13px]">
    <span className="text-white leading-[37.8px] text-[28px]">Add to cart</span>
  </button>
);
//todo ha mathecl a product title style itt is meg máshol is akk mergelni lehet e

export default ProductDetailsCard;
