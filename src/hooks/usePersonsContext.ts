import { useContext } from "react";
import { PersonsContext } from "../sections/persons/persons-context";

export const usePersonsContext = () => {
  return useContext(PersonsContext);
};
