import { useContext } from "react";
import { PageContext } from "../pages/page/page-context";

export const usePageContext = () => {
  return useContext(PageContext);
};
