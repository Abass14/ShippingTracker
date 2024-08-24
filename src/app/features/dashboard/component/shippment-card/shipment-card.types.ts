import { PressableProps } from "react-native";
import { IshipmentMessage } from "../../../../services/shipments/shipments.types";

export interface IShipmentCard extends PressableProps {
    shipment: IshipmentMessage
}