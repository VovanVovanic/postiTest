
import { TextField } from "@material-ui/core";
import { useCallback } from "react";
import { AddInputComponent } from "../../types/componentTypes";
import { useStyles } from "./addInput.styles";


const AddInput: React.FC<AddInputComponent> = ({ onChange }) => {
  const classes = useStyles();

  const onAdd = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  },[onChange])

  return <TextField id="standard-basic" label="name" onChange={(e) => onAdd(e)} className={classes.root}/>;
};

export default AddInput
