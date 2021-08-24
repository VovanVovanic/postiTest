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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem iste sapiente suscipit. Quos eius expedita molestias dolorum ex iusto quas dignissimos, nemo nihil officia sunt velit, non dicta! Aperiam, voluptas.
        </AccoItem>
      );
    });
  }, [products]);

  return <Box className={classes.root}>{list}</Box>;
};

export default Products;
