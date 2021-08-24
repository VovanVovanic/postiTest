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


const AccoItem: React.FC<AccoComponentType > = ({ category, brand, product, children, type }) => {
const classes = useStyles();
console.log(type)
  const deleteCategory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    console.log(category?.id);
  };

  const itemTitle = useMemo(() => {
    let t:string | undefined = ""
    if (type === 'category') {
      t = category?.name
    }
    if (type === 'brand') {
      t = brand?.name
    }
    if (type === 'product') {
      t = product?.name
    }
    return t
  },[brand?.name, category?.name, product?.name, type])

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
            color="secondary"
            variant="contained"
            className={classes.btn}
            onClick={(e) => deleteCategory(e)}
          >
            delete
          </Button>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccoItem;
