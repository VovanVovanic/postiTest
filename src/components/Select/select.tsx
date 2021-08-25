import { Select } from "@material-ui/core";
import { useMemo } from "react";
import { PropsWithChildren } from "react";
import { ReactNode } from "react";
import { SelectPropsType } from "../../types/componentTypes";
import { useStyles } from "./select.styles";



const SelectItem: React.FC<SelectPropsType & PropsWithChildren<ReactNode>> = ({ name, children }) => {
    const classes = useStyles();

  const isName = useMemo(() => {
   return name === null ? "-----------" : name
  },[name])
  return (
    <Select
      value={isName}
      className={classes.root}
      
    >
      {children}
    </Select>
  );
}

export default SelectItem