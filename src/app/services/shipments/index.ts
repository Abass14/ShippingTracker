import { ApiEndpoints } from "../endpoints";
import { apiService } from "../network";
import { IFilters, IShipmentListRequest, IShipmentResponse } from "./shipments.types";

const shipmentApi = apiService.injectEndpoints({
    endpoints: build => ({
        getShipmentStatusList: build.query<
            IShipmentResponse,
            IShipmentListRequest
        >({
            query: data => {
                let url = `${ApiEndpoints.shipmentList}?doctype=AWB&fields=["*"]&filters={}`
                if (data?.filters?.status) {
                    url = `${ApiEndpoints.shipmentList}?doctype=AWB&fields=["*"]&filters={"status":"${data?.filters?.status}"}`
                }
                return {
                    url: url,
                    method: 'GET'
                }
            },
        }),
    })
})

export const {
    useLazyGetShipmentStatusListQuery,
    useGetShipmentStatusListQuery
} = shipmentApi