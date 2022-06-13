import { CarInterface } from "src/app/Interfaces/carInterface";
import { Action } from "@ngrx/store";

export const SAVE_DETAIL = "[CAR] save_details";

export class saveDetails implements Action {
  readonly type = SAVE_DETAIL;

  constructor(public payload: CarInterface) {}
}

export type CarReducerActions = saveDetails;
