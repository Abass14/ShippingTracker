import { PressableProps } from "react-native";
import { IShipment } from "../../data";

export interface IShipmentCard extends PressableProps {
    shipment: IShipment
}