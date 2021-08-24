import axios from "axios";


export const receiveCategories = () => {
  return axios
    .get("./responseData.json")
    .then((res) => res);
} 
