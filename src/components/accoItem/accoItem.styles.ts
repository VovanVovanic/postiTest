import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    title: {
      display: "flex",
      width: "90%",
      justifyContent: "space-between",
      borderRight: "1px solid black",
      paddingRight: "20px",
    },
    btn: {
      fontSize: "8px",
    },
  })
);
