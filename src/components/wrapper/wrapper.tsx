import { Box, Button } from "@material-ui/core";
import { PropsWithChildren, ReactNode } from "react";

import { WrapperPropsType } from "../../types/componentTypes";
import { useStyles } from "./wrapper.styles";


const Wrapper: React.FC<WrapperPropsType & PropsWithChildren<ReactNode>> = ({ children, name }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {children}
      <Button size="small" variant="contained" className={ classes.btn}color="primary">{`add ${name}`}</Button>
    </Box>
  )
}
export default Wrapper