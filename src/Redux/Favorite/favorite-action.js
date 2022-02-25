import { CLICK } from "./favorite-types";

export const click = (item) => {
  return {
    type: CLICK,
    payload: {
      name: item.name,
    },
  };
};
