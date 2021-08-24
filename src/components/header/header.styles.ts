import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: "50px",
    },
    panel: {
      display: "flex",
      width: "40%",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        background: "red",
      },
    },
    buttons: {
      display: "flex",
      minWidth: "400px",
      justifyContent: "space-around",
    },
  })
);
