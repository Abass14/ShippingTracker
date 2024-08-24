import { useEffect, useMemo, useState } from "react"
import { useLazyGetShipmentStatusListQuery } from "../../../services/shipments"
import { IShipmentListRequest, IshipmentMessage } from "../../../services/shipments/shipments.types"
import { ShipmentStatus } from "../../../../utils/enum/ShipmentStatus"

const useShipments = () => {
    const [fetchShipments, { isLoading }] = useLazyGetShipmentStatusListQuery()
    const [shipment, setShipment] = useState<{ shipment: IshipmentMessage, checked: boolean }[]>([])
    const [filters, setFilters] = useState<ShipmentStatus | null>(null)

    const isAllShipmentsMarked = useMemo(() => {
        return shipment?.filter(ship => ship?.checked)?.length === shipment?.length
    }, [shipment])

    const handleMarkAll = () => {
        setShipment(shipment?.map(ship => ({ ...ship, checked: !isAllShipmentsMarked })))
    }

    const getShipments = async (refresh = false) => {
        const request: IShipmentListRequest = {}
        if (filters) {
            request.filters = {
                status: filters
            }
        }
        const response = await fetchShipments(request, false).unwrap()
        setShipment(response?.message?.map(ship => ({ shipment: ship, checked: false })))
    }

    const onRefresh = () => {
        setFilters(null)
    }

    useEffect(() => {
        getShipments()
    }, [filters])



    return {
        isLoading,
        shipment,
        filters,
        setFilters,
        onRefresh,
        setShipment,
        isAllShipmentsMarked,
        handleMarkAll
    }
}

export default useShipments