import { DOUGH_TYPE_MAP, INGREDIENTS_MAP, SAUCE_MAP } from "./contstants";
import pizzaSize from "./enums/pizzaSize";

export const normalizeIngredientsType = (ingredient) => {
  return {
    ...ingredient,
    type: INGREDIENTS_MAP.get(ingredient.name),
  };
};

export const normalizeDoughType = (dough) => {
  return {
    ...dough,
    type: DOUGH_TYPE_MAP.get(dough.name),
  };
};

export const normalizeSauceType = (sauce) => {
  return {
    ...sauce,
    type: SAUCE_MAP.get(sauce.name),
  };
};

export const normalizeSizeType = (size) => {
  return {
    ...size,
    type: pizzaSize[size.multiplier],
  };
};
