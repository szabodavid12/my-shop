import { Link } from "react-router-dom";
import DiscountLabel from "./DiscountLabel";
import { getCalculatedPrice } from "../../helper/priceHelper";

type ProductCardProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  coverImage: string;
};

const ProductCard = (props: ProductCardProps) => {
  const { id, title, description, price, discountPercentage, coverImage } =
    props;

  return (
    <div className="bg-white rounded-[6.5px] p-[10px] border-[0.65px] border-border">
      <Cover
        discountPercentage={discountPercentage}
        title={title}
        coverSource={coverImage}
      />
      <ProductSummary
        title={title}
        description={description}
        price={getCalculatedPrice(price, discountPercentage)}
      />
      <div className="mb-[15px]">
        <DetailsButton id={id} />
      </div>
    </div>
  );
};

type CoverProps = {
  title: string;
  discountPercentage: number;
  coverSource: string;
};

const Cover = (props: CoverProps) => (
  <div className="relative">
    <div className="absolute right-[0px] m-[10px]">
      <DiscountLabel discountPercentage={props.discountPercentage} />
    </div>
    <img
      className="rounded-[6.5px] h-[150px]"
      src={props.coverSource}
      alt={props.title}
    />
  </div>
);

type ProductSummaryProps = {
  title: string;
  description: string;
  price: string;
};

const ProductSummary = (props: ProductSummaryProps) => (
  <div className="flex">
    <div className="flex flex-col justify-between ">
      <span className="text-[20px] font-gsSemibold mt-[10px] leading-[27px] line-clamp-[1]">
        {props.title}
      </span>
      <span className="font-gsSMedium text-[14px] leading-[18.9px] line-clamp-[2]">
        {props.description}
      </span>
    </div>
    <span className="whitespace-nowrap text-[24px] font-gsSemibold mt-[6.5px] leading-[32.4px]">{`${props.price}`}</span>
  </div>
);

//todo lekezelni hogy ugyanakkora legyen a hely akkor is ha 1 soros csak a desc
type DetailsButtonProps = {
  id: number;
};

const DetailsButton = (props: DetailsButtonProps) => (
  <Link to={`/product/${props.id}`}>
    <div className="w-full bg-black font-gsSemibold h-[40px] rounded-[25.83px] mt-[13px] text-center content-center">
      <span className="text-white leading-[21.6px] text-[16px]">
        See details
      </span>
    </div>
  </Link>
);

export default ProductCard;
