import { DOUGH_TYPE, INGREDIENTS, SAUCE } from "@/common/contstants";
import pizzaSize from "./enums/pizzaSize";

export const normalizeDoughType = (dough) => {
  return {
    ...dough,
    type: DOUGH_TYPE.find(({ label }) => dough.name === label).value,
  };
};

export const normalizeIngredientsType = (ingredient) => {
  return {
    ...ingredient,
    type: INGREDIENTS.find(({ label }) => ingredient.name === label).value,
  };
};

export const normalizeSauceType = (sauce) => {
  return {
    ...sauce,
    type: SAUCE.find(({ label }) => sauce.name === label).value,
  };
};

export const normalizeSizeType = (size) => {
  return {
    ...size,
    type: pizzaSize[size.multiplier],
  };
};
