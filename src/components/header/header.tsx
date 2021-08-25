import {
  AppBar,
  Box,
  Button,
  ClickAwayListener,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useCallback, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../redux/store";
import {
  ActivePopperType,
  setBrandType,
  setCategoryType,
} from "../../types/componentTypes";
import { CategoryType } from "../../types/productTypes";
import SelectItem from "../Select/select";
import AddItem from "./addItem/addItem";
import { useStyles } from "./header.styles";
import HeaderPopper from "./headerPopper/headerPopper";

const Header = () => {
  const classes = useStyles();

  ///categories
  const [category, setCategory] = useState<setCategoryType>({
    catName: null,
    catId: null,
  });
  const { catName, catId } = category;

  const onCategorySet = useCallback((name: string, id: string) => {
    setCategory({
      catId: id,
      catName: name,
    });
  }, []);

  const categories = useSelector<AppRootStateType, Array<CategoryType>>(
    (state) => state.products.categories
  );
  const categoryList = useMemo(() => {
    return categories.map(({ name, id }) => {
      return (
        <MenuItem value={name} key={id} onClick={() => onCategorySet(name, id)}>
          {name}
        </MenuItem>
      );
    });
  }, [categories, onCategorySet]);

  ////brands
  const [brand, setBrand] = useState<setBrandType>({
    brandName: null,
    brandId: null,
  });
  const { brandName, brandId } = brand;

  const onBrandSet = useCallback((name: string, id: number) => {
    setBrand({
      brandId: id,
      brandName: name,
    });
  }, []);

  const brandList = useMemo(() => {
    if (catId) {
      const category = categories.find((el) => el.id === catId);

      return category?.brands.map(({ name, id }) => {
        return (
          <MenuItem value={name} key={id} onClick={() => onBrandSet(name, id)}>
            {name}
          </MenuItem>
        );
      });
    }
  }, [catId, categories, onBrandSet]);

  ////poppers
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const popperRef = useRef<HTMLButtonElement>();
  const [activePopper, setActivePopper] = useState<ActivePopperType>("");
  const openAddCategoryPopper = useMemo(
    () => !!anchorEl && activePopper === "category",
    [activePopper, anchorEl]
  );
  const openAddBrandPopper = useMemo(
    () => !!anchorEl && activePopper === "brand",
    [activePopper, anchorEl]
  );
  const openAddProductPopper = useMemo(
    () => !!anchorEl && activePopper === "product",
    [activePopper, anchorEl]
  );

  const handlePopperClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, type: ActivePopperType) => {
      if (!!popperRef?.current) {
        setAnchorEl(
          anchorEl && type === activePopper ? null : popperRef?.current
        );
        setActivePopper(type);
      }
      setCategory({
        catId: null,
        catName: null,
      });
    },
    [activePopper, anchorEl]
  );

  const onClose = useCallback(() => {
    setAnchorEl(null);
    setActivePopper("");
    setCategory({
      catId: null,
      catName: null,
    });
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Box className={classes.panel}>
            <Typography variant="h6">Actions</Typography>

            <Box className={classes.buttons}>
              <Button
                size="small"
                color="default"
                variant="contained"
                buttonRef={popperRef}
                onClick={(e) => handlePopperClick(e, "category")}
              >
                Add Category
              </Button>
              <Button
                size="small"
                color="default"
                variant="contained"
                onClick={(e) => handlePopperClick(e, "brand")}
              >
                Add Brand
              </Button>
              <Button
                size="small"
                color="default"
                variant="contained"
                onClick={(e) => handlePopperClick(e, "product")}
              >
                Add Product
              </Button>
              <HeaderPopper open={openAddCategoryPopper} anchorEl={anchorEl}>
                <AddItem onClose={onClose} name="category" />
              </HeaderPopper>
              <HeaderPopper open={openAddBrandPopper} anchorEl={anchorEl}>
                <AddItem onClose={onClose} name="brand">
                  <SelectItem name={catName}>{categoryList}</SelectItem>
                </AddItem>
              </HeaderPopper>
              <HeaderPopper open={openAddProductPopper} anchorEl={anchorEl}>
                <AddItem onClose={onClose} name="product">
                  <SelectItem name={catName}>{categoryList}</SelectItem>
                  <SelectItem name={brandName}>{brandList}</SelectItem>
                </AddItem>
              </HeaderPopper>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
