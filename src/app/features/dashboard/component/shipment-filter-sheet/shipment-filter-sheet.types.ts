import { ShipmentStatus } from "../../../../../utils/enum/ShipmentStatus";
import { IBottomSheet } from "../../../../components/bottomsheet/bottomsheet.types";

export interface IShipmentFilterSheet extends Omit<IBottomSheet, 'children'> {
    onSelectFilters: (filters: ShipmentStatus | null) => void
    filtersSelected: ShipmentStatus | null
}