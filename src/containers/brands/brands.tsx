import { Box } from "@material-ui/core";
import { useMemo } from "react";
import AccoItem from "../../components/accoItem/accoItem";
import { BrandsComponentType } from "../../types/componentTypes";
import Products from "../products/products";
import { useStyles } from "./brands.styles";


const Brands: React.FC<BrandsComponentType> = ({ brands, catId }) => {
const classes = useStyles();

  const list = useMemo(() => {
    return brands.map((brand) => {
      return (
        <AccoItem key={brand.id} type='brand' brand={brand} catId={catId}>
          <Products products={brand.products} catId={catId} brandId={brand.id}/>
        </AccoItem>
      )
    })
  }, [brands, catId])
  

  return (
    <Box className={classes.root}>
      {list}
    </Box>
  )
};

export default Brands