import { ShipmentStatus } from "../../../utils/enum/ShipmentStatus"

export interface IShipment {
    name: string
    id: string
    from: string
    to: string
    status: ShipmentStatus
}

export const data: IShipment[] = [
    {
        name: 'AWB',
        id: '187Y37Y293U',
        from: 'Alexandria',
        to: 'Cairo',
        status: ShipmentStatus.Delivered
    },
    {
        name: 'AWB',
        id: '187Y37Y293U',
        from: 'Alexandria',
        to: 'Cairo',
        status: ShipmentStatus.Cancelled
    },
    {
        name: 'AWB',
        id: '187Y37Y293U',
        from: 'Lagos',
        to: 'Cairo',
        status: ShipmentStatus.OnHold
    },
    {
        name: 'AWB',
        id: '187Y37Y293U',
        from: 'Lagos',
        to: 'Cairo',
        status: ShipmentStatus.Delivered
    },
    {
        name: 'AWB',
        id: '187Y37Y293U',
        from: 'Lagos',
        to: 'Cairo',
        status: ShipmentStatus.Delivered
    },
    {
        name: 'AWB',
        id: '187Y37Y293U',
        from: 'Lagos',
        to: 'Cairo',
        status: ShipmentStatus.Rejected
    },
    {
        name: 'AWB',
        id: '187Y37Y293U',
        from: 'Lagos',
        to: 'Cairo',
        status: ShipmentStatus.Received
    },
    {
        name: 'AWB',
        id: '187Y37Y293U',
        from: 'Lagos',
        to: 'Cairo',
        status: ShipmentStatus.Delivered
    },
    {
        name: 'AWB',
        id: '187Y37Y293U',
        from: 'Lagos',
        to: 'Cairo',
        status: ShipmentStatus.Cancelled
    },
    {
        name: 'AWB',
        id: '187Y37Y293U',
        from: 'Lagos',
        to: 'Cairo',
        status: ShipmentStatus.Delivered
    },
]