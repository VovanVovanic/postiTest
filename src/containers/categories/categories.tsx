
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../redux/store";
import { CategoryType } from "../../types/productTypes";
import { useMemo } from "react";
import { useStyles } from "./categories.styles";
import AccoItem from "../../components/accoItem/accoItem";
import Brands from "../brands/brands";


const Categories = () => {
const classes = useStyles();
const categories = useSelector<AppRootStateType, Array<CategoryType>>((state) => state.products.categories);

  const list = useMemo(() => {
    return categories.map((category) => {
      return (
        <div>
          <AccoItem category={category} key={category.id} type='category'>
            <Brands brands={category.brands} catId={category.id} />
          </AccoItem>
        </div>
      );
  })
},[categories])

  return (
    <div className={classes.root}>
      {list}
    </div>
  );
};

export default Categories;