import { createComponentContext } from "../../utils/createComponentContext";
import type { TPartnersContextValue } from "./types";

const initialValue: TPartnersContextValue = {
  partners: [],
};

export const [PartnersProvider, usePartnersContext] =
  createComponentContext<TPartnersContextValue>(initialValue);
