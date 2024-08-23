import { useEffect, useMemo, useState } from "react";
import AppBottomSheet from "../../../../components/bottomsheet";
import { IShipmentFilterSheet } from "./shipment-filter-sheet.types";
import { TouchableOpacity, View } from "react-native";
import AppText from "../../../../components/text";
import { shipmentStatusList } from "../../../../../utils/shipment";
import { ShipmentStatus } from "../../../../../utils/enum/ShipmentStatus";
import useAppTheme from "../../../../hooks/useAppTheme";
import { styles } from "./styles";
import { TextTypes } from "../../../../../utils/enum/TextEnums";


const ShipmentFilterSheet = ({
    bottomsheetRef,
    onSelectFilters,
    filtersSelected,
    ...rest
}: IShipmentFilterSheet) => {
    const { appColors } = useAppTheme()
    const styleSheet = styles(appColors)
    const snapPoint = useMemo(() => ['1%', '40%'], [])
    const [selectedFilters, setSelectedFilters] = useState<Record<string, ShipmentStatus>>(
        filtersSelected?.reduce((acc: Record<string, ShipmentStatus>, item) => {
            acc[item] = item
            return acc
        }, {}) //convert selected filter to map as initial vaalue
    )

    const filters = filtersSelected?.reduce(
        (acc: Record<string, ShipmentStatus>, item) => {
            acc[item] = item
            return acc
        }, {})

    const onDone = () => {
        onSelectFilters(Object.values(selectedFilters))
        bottomsheetRef.current?.snapToPosition(0)
    }

    const handleSelectFilter = (filter: ShipmentStatus) => {
        setSelectedFilters(prev => {
            let prevCopy = { ...prev }
            if (prevCopy?.[filter]) {
                delete prevCopy[filter]
            } else {
                prevCopy = {
                    ...prevCopy,
                    [filter]: filter
                }
            }
            return prevCopy
        })
    }

    useEffect(() => {
        setSelectedFilters(filters)
    }, [filtersSelected])

    return (
        <AppBottomSheet
            bottomsheetRef={bottomsheetRef}
            title="Filter"
            onDone={onDone}
            snapPoints={snapPoint}
            {...rest}
        >
            <View style={styleSheet.container}>
                <AppText type={TextTypes.MEDIUM} style={styleSheet.title}>
                    SHIPMENT STATUS
                </AppText>
                <View style={styleSheet.statusList}>
                    {Object.values(shipmentStatusList)?.map(status => (
                        <TouchableOpacity
                            key={status}
                            onPress={() => handleSelectFilter(status)}
                            style={[styleSheet.statusSpan, selectedFilters[status] ? styleSheet.activeSpan : null]}
                        >
                            <AppText style={[styleSheet.statusText, selectedFilters[status] ? styleSheet.activeText : null]}>
                                {status}
                            </AppText>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </AppBottomSheet>
    )
}

export default ShipmentFilterSheet