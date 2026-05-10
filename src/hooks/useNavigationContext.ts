import { useContext } from "react";
import { NavigationContext } from "../components/navigation/navigation-context";

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};
