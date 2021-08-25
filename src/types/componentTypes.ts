import { ReactNode } from "react";
import { BrandType, CategoryType, ItemType } from "./productTypes";

export interface AccoComponentType {
  category?: CategoryType;
  brand?: BrandType;
  product?: ItemType;
  children: ReactNode;
  type: "category" | "brand" | "product";
}

export interface BrandsComponentType {
  brands: Array<BrandType>;
}

export interface ProductsComponentType {
  products: Array<ItemType>;
}

export interface AddInputComponent {
  onChange: (value: string)=>void
}

export interface popperTitleComponent {
  name: string
  onClose: ()=>void
}

export interface WrapperPropsType {
  name: string
}

export type ActivePopperType = 'brand' | 'product' | 'category' | ''

export interface AddItemPropsType {
  onClose: () => void;
  name: "brand" | "product" | "category";
}

export interface SelectPropsType{
  name: string | null
}
export interface setCategoryType {
  catName: string | null
  catId: string | null
}

export interface setBrandType {
  brandName: string | null;
  brandId: number | null;
}