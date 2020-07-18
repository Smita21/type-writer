import { GET_TEXT } from "./typewriter.types";

export const getText = () => {
  return {
    type: GET_TEXT, //assigned it to constant that we defined in cakeTypes.js
  };
};
