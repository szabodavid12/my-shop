import Star from "../../assets/svg/Star";

const NUMBER_OF_STARS = 5;

type RatingSectionProps = {
  rating: number;
};

const RatingSection = (props: RatingSectionProps) => (
  <div className="flex gap-[15px]">
    <RatingStars rating={props.rating} />
    <RatingValue rating={props.rating} />
  </div>
);

type RatingStarsProps = {
  rating: number;
};

const RatingStars = (props: RatingStarsProps) => (
  <div className="flex gap-[5px] my-auto ">
    {[...Array(NUMBER_OF_STARS)].map((_, index) => {
      const placeOfStar = index + 1;

      return <Star key={index} isActive={placeOfStar <= props.rating} />;
    })}
  </div>
);

type RatingValueProps = {
  rating: number;
};
const RatingValue = (props: RatingValueProps) => (
  <span className="text-[24px] font-gsSemibold leading-[32.4px] my-auto">
    {props.rating}
  </span>
);

export default RatingSection;
