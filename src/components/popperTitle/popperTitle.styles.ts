import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      background: "rgba(46, 49, 49, 1)",
      padding: " 0 5px",
      borderRadius: "5px",
      justifyContent: "space-between",
    },
    title: {
      color: "white",
      fontSize: "12px",
      lineHeight: "40px"
    },
  })
);
