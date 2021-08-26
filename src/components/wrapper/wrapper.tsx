import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { ChangeEvent, PropsWithChildren, ReactNode, useCallback } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { WrapperPropsType } from "../../types/componentTypes";
import { useStyles } from "./wrapper.styles";
import { useState } from "react";

const Wrapper: React.FC<WrapperPropsType & PropsWithChildren<ReactNode>> = ({
  children,
  name,
  onClose,
  onAddName,
}) => {
  const classes = useStyles();
  const [value, setValue] = useState<string>("");

  const onAdd = useCallback(() => {
    if (value === "") {
      return;
    }
    onAddName(value.trim());
    setValue("");
  }, [onAddName, value]);

  const onValueSet = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setValue(e.currentTarget.value);
    },
    []
  );

  const onKeyDownHandler = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      e.key === "Enter" && value !== "" && onAdd();
      e.key === "Escape" && setValue("");
    },
    [onAdd, value]
  );

  return (
    <Box className={classes.root}>
      <Box className={classes.titleWrapper}>
        <Typography className={classes.title}>{`Add ${name}`}</Typography>
        <IconButton color="secondary" size="small" onClick={() => onClose()}>
          <CloseIcon color="secondary" />
        </IconButton>
      </Box>

      {children}

      <TextField
        id="standard-basic"
        label="name"
        value={value}
        onChange={(e) => onValueSet(e)}
        onKeyDown={(e) => onKeyDownHandler(e)}
        className={classes.input}
      />
      <Button
        size="small"
        variant="contained"
        className={classes.btn}
        color="primary"
        onClick={onAdd}
      >{`add ${name}`}</Button>
    </Box>
  );
};
export default Wrapper;
