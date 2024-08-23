import { FlatList, View } from "react-native"
import Container from "../../components/container"
import AppText from "../../components/text"
import Header from "./component/header"
import useAppTheme from "../../hooks/useAppTheme"
import { styles } from "./styles"
import { TextTypes } from "../../../utils/enum/TextEnums"
import AppSearchBar from "../../components/search-bar"
import AppButton from "../../components/button"
import FilterIcon from "../../../assets/svg/FilterIcon"
import ScanIcon from "../../../assets/svg/ScanIcon"
import Checkbox from "../../components/checkbox"
import { data } from "./data"
import ShipmentCard from "./component/shippment-card"
import ShipmentFilterSheet from "./component/shipment-filter-sheet"
import useBottomSheet from "../../hooks/useBottomSheet"
import { useState } from "react"
import { ShipmentStatus } from "../../../utils/enum/ShipmentStatus"

const Dashboard = () => {
    const { appColors } = useAppTheme()
    const styleSheet = styles(appColors)
    const { bottomSheetRef, openBottomSheet } = useBottomSheet()
    const [filters, setFilters] = useState<ShipmentStatus[]>([])

    return (
        <Container
            header={<Header />}
            bottomSheetsModal={
                <ShipmentFilterSheet
                    bottomsheetRef={bottomSheetRef}
                    filtersSelected={filters}
                    onSelectFilters={setFilters}
                />
            }
        >
            <View style={styleSheet.container}>
                <View style={styleSheet.nameContainer}>
                    <AppText style={styleSheet.hello}>
                        Hello
                    </AppText>
                    <AppText style={styleSheet.name} type={TextTypes.BOLD}>
                        Ibrahim Shaker
                    </AppText>
                </View>
                <AppSearchBar
                    placeholder="Search"
                />
                <View style={styleSheet.row}>
                    <AppButton
                        Icon={<FilterIcon />}
                        style={styleSheet.filterBtn}
                        labelStyle={styleSheet.filterBtnText}
                        onPress={openBottomSheet}
                    >
                        Filters
                    </AppButton>
                    <AppButton
                        Icon={<ScanIcon />}
                        style={styleSheet.btn}
                    >
                        Add Scan
                    </AppButton>
                </View>
                <View style={styleSheet.shippmentContainer}>
                    <View style={styleSheet.shipmentHeader}>
                        <AppText style={styleSheet.shippmentTitle} type={TextTypes.BOLD}>
                            Shipments
                        </AppText>
                        <View style={styleSheet.checkboxRow}>
                            <Checkbox
                                isChecked={true}
                                onChecked={checked => { }}
                            />
                            <AppText style={styleSheet.markAll} type={TextTypes.MEDIUM}>
                                Mark All
                            </AppText>
                        </View>
                    </View>
                    <FlatList
                        data={data}
                        keyExtractor={(_, idx) => idx?.toString()}
                        renderItem={({ item }) => (
                            <ShipmentCard
                                shipment={item}
                            />
                        )}
                        contentContainerStyle={styleSheet.list}
                    />
                </View>
            </View>
        </Container>
    )
}

export default Dashboard