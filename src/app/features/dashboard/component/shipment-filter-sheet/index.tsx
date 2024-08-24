import { useEffect, useState } from "react";
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
    const [selectedFilters, setSelectedFilters] = useState<ShipmentStatus | null>(filtersSelected)


    const onDone = () => {
        onSelectFilters(selectedFilters)
        bottomsheetRef.current?.close()
    }

    const handleSelectFilter = (filter: ShipmentStatus) => {
        setSelectedFilters(prev => {
            if (prev === filter) {
                return null
            } else {
                return filter
            }
        })
    }

    useEffect(() => {
        setSelectedFilters(filtersSelected)
    }, [filtersSelected])

    return (
        <AppBottomSheet
            bottomsheetRef={bottomsheetRef}
            title="Filter"
            onDone={onDone}
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
                            style={[styleSheet.statusSpan, selectedFilters === status ? styleSheet.activeSpan : null]}
                        >
                            <AppText style={[styleSheet.statusText, selectedFilters === status ? styleSheet.activeText : null]}>
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