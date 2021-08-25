

import { PropsWithChildren } from "react";
import { AddItemPropsType } from "../../../types/componentTypes";
import AddInput from "../../addInput/addInput";
import PopperTitle from "../../popperTitle/popperTitle";
import Wrapper from "../../wrapper/wrapper";


const AddItem:React.FC<AddItemPropsType & PropsWithChildren<any>> = ({onClose, name, children}) => {


  const onCategoryAdd = () => {
    console.log('addCategory')
  }

  return (
    <Wrapper name={name}>
      <PopperTitle name={name} onClose={() => onClose()} />
        {children}
      <AddInput onChange={onCategoryAdd} />
    </Wrapper>
  );
};

export default AddItem;
