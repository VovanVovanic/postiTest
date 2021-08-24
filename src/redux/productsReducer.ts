import { Dispatch } from "redux";
import { CategoryType } from "../types/productTypes";
import { ActionType, SETCATEGORIES, SETERROR, SETLOADING, SETMESSAGE } from "./actions";



const initialState = {
  isLoading: false,
  error: "",
  message: "",
  categories: [] as Array<CategoryType>,
};

type InitialStateType = typeof initialState;

export const productsReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case SETLOADING:
      return { ...state, isLoading: action.load };
    case SETERROR:
      return { ...state, error: action.error };
    case SETMESSAGE:
      return { ...state, message: action.message };
    case SETCATEGORIES:
      return { ...state, categories: action.categories };
    default:
      return state;
  }
};


//thunks

