import { IBottomSheet } from "../../../components/bottomsheet/bottomsheet.types";

export interface ILoginSheet extends Omit<IBottomSheet, 'children'> {}