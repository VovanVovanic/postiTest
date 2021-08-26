import { Select } from "@material-ui/core";
import { PropsWithChildren } from "react";
import { ReactNode } from "react";
import { SelectPropsType } from "../../types/componentTypes";
import { useStyles } from "./select.styles";



const SelectItem: React.FC<SelectPropsType & PropsWithChildren<ReactNode>> = ({ name, isDisabled, children }) => {
    const classes = useStyles();
  return (
    <Select
      value={name}
      disabled={isDisabled}
      className={classes.root}
    >
      {children}
    </Select>
  );
}

export default SelectItem