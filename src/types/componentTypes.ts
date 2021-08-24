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