import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      background: "rgba(191, 191, 191, 1)",
      borderRadius: "5px",
      padding: "0 0 20px 0",
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      minHeight: "150px",
      justifyContent: "space-between",
    },
    btn: {
      margin: "0 10px",
    },
    titleWrapper: {
      display: "flex",
      background: "rgba(46, 49, 49, 1)",
      padding: " 0 5px",
      borderRadius: "5px",
      justifyContent: "space-between",
    },
    title: {
      color: "white",
      fontSize: "12px",
      lineHeight: "40px",
    },
    input: {
      margin: "20px 10px 30px 10px",
    },
  })
);
