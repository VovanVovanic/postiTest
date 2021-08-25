import { Box } from "@material-ui/core";
import { useMemo } from "react";
import AccoItem from "../../components/accoItem/accoItem";
import { ProductsComponentType } from "../../types/componentTypes";
import { useStyles } from "./products.styles";

const Products: React.FC<ProductsComponentType> = ({ products }) => {
  const classes = useStyles();

  const list = useMemo(() => {
    return products.map((product) => {
      return (
        <AccoItem key={product.id} type="product" product={product} >
          Here can be description
        </AccoItem>
      );
    });
  }, [products]);

  return <Box className={classes.root}>{list}</Box>;
};

export default Products;
