import { CURRENCY } from "../../constants/Values";
import DiscountLabel from "./DiscountLabel";

type ItemCardProps = {
  title: string;
  description: string;
  price: string;
  discount: string;
};

const ItemCard = (props: ItemCardProps) => {
  const { title, description, price, discount } = props;

  return (
    <div className="bg-white h-[320px] w-[305px] rounded-[6.5px] p-[10px] border-[0.65px] border-border">
      <Cover discountValue={discount} title={title} />
      <ItemSummary title={title} description={description} price={price} />
      <DetailsButton />
    </div>
  );
};

type CoverProps = {
  title: string;
  discountValue: string;
};

const Cover = (props: CoverProps) => (
  <div className="relative">
    <div className="absolute right-[0px] m-[10px]">
      <DiscountLabel title={props.discountValue} />
    </div>
    <img
      className=" rounded-[6.5px]"
      src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
      alt={props.title}
    />
  </div>
);

type ItemSummaryProps = {
  title: string;
  description: string;
  price: string;
};

const ItemSummary = (props: ItemSummaryProps) => (
  <div className="flex">
    <div className="flex flex-col justify-between ">
      <span className="text-[20px] font-gsSemibold mt-[10px] leading-[27px] line-clamp-[1]">
        {props.title}
      </span>
      <span className="font-gsSMedium text-[14px] leading-[18.9px] line-clamp-[2]">
        {props.description}
      </span>
    </div>
    <span className="whitespace-nowrap text-[24px] font-gsSemibold mt-[6.5px] leading-[32.4px] break-keep">{`${props.price} ${CURRENCY}`}</span>
  </div>
);

//todo lekezelni hogy ugyanakkora legyen a hely akkor is ha 1 soros csak a desc

const DetailsButton = () => (
  <button className="w-full bg-black font-gsSemibold h-[40px] rounded-[25.83px] mt-[13px]">
    <span className="text-white leading-[21.6px] text-[16px]">See details</span>
  </button>
);

export default ItemCard;
