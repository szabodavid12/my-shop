import { RootState } from "../store";

export const selectMyFirst = (state: RootState) => state.item.name;
