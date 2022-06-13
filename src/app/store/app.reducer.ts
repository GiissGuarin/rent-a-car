import { CarInterface } from "../Interfaces/carInterface";
import * as carActions from "./carReducer.actions";

export const initialData: CarInterface = {
  id: "",
  title: "",
  brand: "",
  model: "",
  line: "",
  year: "",
  price: 0,
  description: "",
  specification: [
    {
      text: 0,
      icon: "",
    },
  ],
  img: "",
  imgs_large: [],
};

export function carReducer(
  state: CarInterface = initialData,
  action: carActions.CarReducerActions
) {
  switch (action.type) {
    case carActions.SAVE_DETAIL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
