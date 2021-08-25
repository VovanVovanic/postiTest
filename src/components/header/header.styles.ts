import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: "50px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "flex-end",
    },

    panel: {
      display: "flex",
      width: "40%",
      justifyContent: "space-between",
      justifySelf: "flex-end",
    },
    buttons: {
      display: "flex",
      minWidth: "400px",
      justifyContent: "space-around",
    },
  })
);
