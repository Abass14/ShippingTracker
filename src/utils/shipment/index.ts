import { ShipmentStatus } from "../enum/ShipmentStatus";
import { AppColorTheme } from "../interfaces/Theme.types";

export const shipmentStatusList = {
    [ShipmentStatus.Received]: ShipmentStatus.Received,
    [ShipmentStatus.Delivered]: ShipmentStatus.Delivered,
    [ShipmentStatus.Cancelled]: ShipmentStatus.Cancelled,
    [ShipmentStatus.Lost]: ShipmentStatus.Lost,
    [ShipmentStatus.OnHold]: ShipmentStatus.OnHold,
    [ShipmentStatus.Putaway]: ShipmentStatus.Putaway,
    [ShipmentStatus.Rejected]: ShipmentStatus.Rejected,
    [ShipmentStatus.NewShipmentTT]: ShipmentStatus.NewShipmentTT
}

export const shipmentStatusColorMap = (color: AppColorTheme): Record<
    ShipmentStatus,
    { bg: string, color: string }
> => ({
    [ShipmentStatus.Cancelled]: { bg: color.lightErrorRed, color: color.errorRed },
    [ShipmentStatus.Delivered]: { bg: color.lightSuccessGreen, color: color.successGreen },
    [ShipmentStatus.Lost]: { bg: color.lightErrorRed, color: color.errorRed },
    [ShipmentStatus.OnHold]: { bg: color.lightWarningOrange, color: color.warningOrange },
    [ShipmentStatus.Putaway]: { bg: color.lightWarningOrange, color: color.warningOrange },
    [ShipmentStatus.Received]: { bg: color.lightRoyalBlue, color: color.royalBlue },
    [ShipmentStatus.Rejected]: { bg: color.lightErrorRed, color: color.errorRed },
    [ShipmentStatus.NewShipmentTT]: { bg: color.lightRoyalBlue, color: color.royalBlue },
})