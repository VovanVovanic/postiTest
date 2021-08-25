import { PropsWithChildren } from "react";
import { Box, Popper, PopperProps, Slide } from "@material-ui/core";
import { useStyles } from "./headerPopper.styles";

export default function HeaderPopper({
  open,
  anchorEl,
  children,
  ...rest
}: PopperProps & PropsWithChildren<any>) {
  const classes = useStyles();
  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      transition
      {...rest}
      className={classes.root}
      placement="bottom-start"
    >
      {({ TransitionProps }) => (
        <Slide {...TransitionProps} timeout={300} in={open}>
          <Box>{children}</Box>
        </Slide>
      )}
    </Popper>
  );
}
