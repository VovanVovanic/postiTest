
export interface ItemType {
  id: number
  name: string
}
export interface BrandType {
  id: number
  name: string
  products: Array<ItemType>
}

export interface CategoryType {
  id: string
  name: string
  brands: Array<BrandType>
}