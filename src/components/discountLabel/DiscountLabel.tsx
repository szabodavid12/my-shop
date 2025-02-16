type DiscountLabelProps = {
  discountPercentage: number;
  containerClassName?: string;
};

const DiscountLabel = (props: DiscountLabelProps) => (
  <div
    className={`${props.containerClassName} bg-discountLabel justify-center flex items-center`}
  >
    <span className="text-white font-gsSemibold text-center leading-[18.9px]">{`-${props.discountPercentage} %`}</span>
  </div>
);

export default DiscountLabel;
