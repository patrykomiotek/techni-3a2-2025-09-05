import { add } from "date-fns";

export const nowDate = () => {
  return add(new Date(), {
    days: 3,
  });
};

console.log(nowDate());
