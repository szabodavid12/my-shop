import { CURRENCY } from "../constants/Values";

const HUNDRED_PERCENT = 100;
const FRACTION_LENGTH = 2;

export const getCalculatedPrice = (
  originalPrice: number,
  discountPercentage?: number
): string => {
  let price = 0;

  if (discountPercentage) {
    price = getDiscountedPrice(originalPrice, discountPercentage);
  } else {
    price = originalPrice;
  }

  return `${price.toFixed(FRACTION_LENGTH)} ${CURRENCY}`;
};

const getDiscountedPrice = (
  originalPrice: number,
  discountPercentage: number
) => originalPrice - originalPrice * (discountPercentage / HUNDRED_PERCENT);
