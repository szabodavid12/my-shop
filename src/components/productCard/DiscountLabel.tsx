type DiscountLabelProps = {
  title: string;
};

const DiscountLabel = (props: DiscountLabelProps) => {
  const { title } = props;

  //todo újraszámolni a discountot

  return (
    <div className="w-[83px] h-[30px] bg-discountLabel rounded-[13.88px] justify-center flex items-center">
      <span className="text-white text-[14px] font-gsSemibold text-center leading-[18.9px]">{`-${title} %`}</span>
    </div>
  );
};

export default DiscountLabel;
