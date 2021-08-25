import { useStyles } from "./accoItem.styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@material-ui/core";
import { AccoComponentType } from "../../types/componentTypes";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { productsActions } from "../../redux/actions";

const AccoItem: React.FC<AccoComponentType> = ({
  category,
  brand,
  product,
  children,
  type,
  catId,
  brandId,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const deleteItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(type, catId, brandId);
    e.stopPropagation();
    if (category && type === "category") {
      dispatch(productsActions.deleteCategory(category.id));
    }
    if (brand && type === "brand" && catId) {
      dispatch(productsActions.deleteBrand(catId, brand.id));
    }
    if (product && type === "product" && catId && brandId) {
      dispatch(productsActions.deleteProduct(catId, brandId, product.id));
    }
  };

  const itemTitle = useMemo(() => {
    let t: string | undefined = "";
    if (type === "category") {
      t = category?.name;
    }
    if (type === "brand") {
      t = brand?.name;
    }
    if (type === "product") {
      t = product?.name;
    }
    return t;
  }, [brand?.name, category?.name, product?.name, type]);

  return (
    <Accordion className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box className={classes.title}>
          <Typography variant="subtitle2">{itemTitle}</Typography>
          <Button
            size="small"
            color="default"
            variant="contained"
            className={classes.btn}
            onClick={(e) => deleteItem(e)}
          >
            delete
          </Button>
        </Box>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccoItem;
