import { AppBar, Box, Button, Hidden, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "./header.styles";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box className = {classes.panel}>
            <Typography variant="h6">Actions</Typography>
            <Box className={classes.buttons}>
              <Button size="small" color="default" variant="contained">
                Add Category
              </Button>
              <Button size="small" color="default" variant="contained">
                Add Brand
              </Button>
              <Button size="small" color="default" variant="contained">
                Add Product
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
