import {
  AppBar,
  Box,
  Button,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useCallback, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBrand, addCategory, addProduct } from "../../redux/actions";
import { AppRootStateType } from "../../redux/store";
import {
  ActivePopperType,
  setBrandType,
  setCategoryType,
} from "../../types/componentTypes";
import { CategoryType } from "../../types/productTypes";
import { createId } from "../../utils/utils";
import SelectItem from "../Select/select";
import Wrapper from "../wrapper/wrapper";
import { useStyles } from "./header.styles";
import HeaderPopper from "./headerPopper/headerPopper";
import { toast } from "react-toastify";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

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

  const isDisabled = useMemo(
    () => (!brandList && activePopper === "product" ? true : false),
    [activePopper, brandList]
  );

  const onClose = useCallback(() => {
    setAnchorEl(null);
    setActivePopper("");
    setCategory({
      catId: null,
      catName: null,
    });
  }, []);

  ////adding

  const message = useCallback((item: string, name: string) => {
    return toast(`${item} ${name} already in data base`, {
      type: "warning",
    });
  }, []);

  const onAddHandler = useCallback(
    (name: string) => {
      const id = createId;
      const newCatId = id.toString();

      const payload = {
        id,
        name,
      };
      if (openAddCategoryPopper) {
        const isCategory = categories.some(
          (category) => category.name.toLowerCase() === name.toLowerCase()
        );
        if (isCategory) {
          message("Category", name);
          return;
        }
        dispatch(addCategory({ name, id: newCatId }));
      }
      if (openAddBrandPopper && catId) {
        const currentCategory = categories.find(
          (category) => category.id === catId
        );
        const isBrand = currentCategory?.brands.some(
          (brand) => brand.name.toLowerCase() === name.toLowerCase()
        );
        if (isBrand) {
          message("Brand", name);
          return;
        }
        dispatch(addBrand(payload, catId));
      }
      if (openAddProductPopper && catId && brandId) {
        const currentCategory = categories.find(
          (category) => category.id === catId
        );
        const currentBrand = currentCategory?.brands.find(
          (brand) => brand.id === brandId
        );
        const isProduct = currentBrand?.products.some(
          (prod) => prod.name.toLowerCase() === name.toLowerCase()
        );
        if (isProduct) {
          message("Product", name);
          return;
        }
        dispatch(addProduct(payload, catId, brandId));
      }
    },
    [
      brandId,
      catId,
      categories,
      dispatch,
      message,
      openAddBrandPopper,
      openAddCategoryPopper,
      openAddProductPopper,
    ]
  );

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
                <Wrapper
                  onClose={onClose}
                  name="category"
                  onAddName={onAddHandler}
                />
              </HeaderPopper>
              <HeaderPopper open={openAddBrandPopper} anchorEl={anchorEl}>
                <Wrapper
                  onClose={onClose}
                  name="brand"
                  onAddName={onAddHandler}
                >
                  <SelectItem name={catName}>{categoryList}</SelectItem>
                </Wrapper>
              </HeaderPopper>
              <HeaderPopper open={openAddProductPopper} anchorEl={anchorEl}>
                <Wrapper
                  onClose={onClose}
                  name="product"
                  onAddName={onAddHandler}
                >
                  <SelectItem name={catName}>{categoryList}</SelectItem>
                  <SelectItem name={brandName} isDisabled={isDisabled}>
                    {brandList}
                  </SelectItem>
                </Wrapper>
              </HeaderPopper>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
