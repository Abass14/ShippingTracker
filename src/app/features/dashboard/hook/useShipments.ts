import { useEffect, useState } from "react"
import { useLazyGetShipmentStatusListQuery } from "../../../services/shipments"
import { AxiosError } from "axios"
import { IFilters, IShipmentListRequest, IshipmentMessage } from "../../../services/shipments/shipments.types"
import { ShipmentStatus } from "../../../../utils/enum/ShipmentStatus"

const useShipments = () => {
    const [fetchShipments, { isLoading }] = useLazyGetShipmentStatusListQuery()
    const [shipment, setShipment] = useState<IshipmentMessage[]>([])
    const [filters, setFilters] = useState<ShipmentStatus | null>(null)

    const getShipments = async (refresh = false) => {
        const request: IShipmentListRequest = {}
        if (filters) {
            request.filters = {
                status: filters
            }
        }
        const response = await fetchShipments(request, false).unwrap()
        setShipment(response?.message)
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
        onRefresh
    }
}

export default useShipments