import { CategoryType } from "../types/productTypes";
import {
  ActionType,
  ADDBRAND,
  ADDCATEGORY,
  ADDPRODUCT,
  DELETEBRAND,
  DELETECATEGORY,
  DELETEPRODUCT,
  SETCATEGORIES,
  SETERROR,
  SETLOADING,
} from "./actions";

const initialState = {
  isLoading: false,
  error: "",
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
    case SETCATEGORIES:
      return { ...state, categories: action.categories };
    case DELETECATEGORY:
      return {
        ...state,
        isLoading: false,
        categories: state.categories.filter((el) => el.id !== action.catId),
      };
    case DELETEBRAND:
      return {
        ...state,
        isLoading: false,
        categories: state.categories.map((category) => {
          if (category.id === action.catId) {
            return {
              ...category,
              brands: category.brands.filter(
                (brand) => brand.id !== action.brandId
              ),
            };
          }
          return category;
        }),
      };
    case DELETEPRODUCT:
      return {
        ...state,
        isLoading: false,
        categories: state.categories.map((category) => {
          if (category.id === action.catId) {
            return {
              ...category,
              brands: category.brands.map((brand) => {
                if (brand.id === action.brandId) {
                  return {
                    ...brand,
                    products: brand.products.filter(
                      (product) => product.id !== action.productId
                    ),
                  };
                }
                return brand;
              }),
            };
          }
          return category;
        }),
      };
    case ADDCATEGORY:
      return {
        ...state,
        isLoading: false,
        categories: [...state.categories, { ...action.payload, brands: [] }],
      };
    case ADDBRAND:
      return {
        ...state,
        isLoading: false,
        categories: state.categories.map((category) => {
          if (category.id === action.catId) {
            return {
              ...category,
              brands: [...category.brands, { ...action.payload, products: [] }],
            };
          }
          return category;
        }),
      };
    case ADDPRODUCT:
      return {
        ...state,
        isLoading: false,
        categories: state.categories.map((category) => {
          if (category.id === action.catId) {
            return {
              ...category,
              brands: category.brands.map((brand) => {
                if (brand.id === action.brandId) {
                  return {
                    ...brand,
                    products: [...brand.products, { ...action.payload }],
                  };
                }
                return brand;
              }),
            };
          }
          return category;
        }),
      };
    default:
      return state;
  }
};
