import { Box, IconButton, Typography } from "@material-ui/core";
import { popperTitleComponent } from "../../types/componentTypes";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./popperTitle.styles";


const PopperTitle: React.FC<popperTitleComponent> = ({ name, onClose }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>{`Add ${name}`}</Typography>
      <IconButton color="secondary" size="small" onClick={()=>onClose()} >
        <CloseIcon color="secondary"/>
      </IconButton>
    </Box>
  );
};
export default PopperTitle