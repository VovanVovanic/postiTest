
import { Dispatch } from 'redux';
import { receiveCategories } from '../api/api';
import { CategoryType } from './../types/productTypes';
export const SETLOADING = "SETLOADING";
export const SETERROR = "SETERROR";
export const SETMESSAGE = "SETMESSAGE";
export const SETCATEGORIES = "SETCATEGORIES";
export const ADDCATEGORY = "ADD CATEGORY";
export const DELETECATEGORY = "DELETECATEGORY";
export const ADDBRAND = "ADDBRAND";
export const DELETEBRAND = "DELETEBRAND";
export const ADDPRODUCT = "ADDPRODUCT";




type auxType<T> = T extends { [key: string]: infer actionType } ? actionType : never
export type ActionType = ReturnType<auxType<typeof productsActions>>



// actions
export const productsActions = {
  setLoading: (load: boolean) => {
    return { type: SETLOADING, load } as const;
  },
  setError: (error: string) => {
    return { type: SETERROR, error } as const
  },
  setMessage: (message: string) => {
    return { type: SETMESSAGE, message } as const;
  },
  setCategories: (categories: Array<CategoryType>) => {
    return {type: SETCATEGORIES, categories, error: ""} as const
  }
}

const {setLoading, setError, setMessage, setCategories} = productsActions

// thunks

export const getCategories= ()  => async (dispatch: Dispatch<ActionType>) => {
  dispatch(setLoading(true));
  const response = await receiveCategories()
  if (response.status !== 200) {
     dispatch(setLoading(false));
    dispatch(setError("Something gonna wrong..."))
    setTimeout(() => dispatch(setError("")),3000)
  }
  dispatch(setLoading(false));
  dispatch(setCategories(response.data.categories))
  };