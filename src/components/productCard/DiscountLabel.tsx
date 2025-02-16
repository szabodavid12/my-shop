type DiscountLabelProps = {
  discountPercentage: number;
};

const DiscountLabel = (props: DiscountLabelProps) => (
  <div className="w-[83px] h-[30px] bg-discountLabel rounded-[13.88px] justify-center flex items-center">
    <span className="text-white text-[14px] font-gsSemibold text-center leading-[18.9px]">{`-${props.discountPercentage} %`}</span>
  </div>
);

export default DiscountLabel;
