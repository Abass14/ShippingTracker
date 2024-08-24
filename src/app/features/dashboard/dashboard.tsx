import { FlatList, RefreshControl, View } from "react-native"
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
import useShipments from "./hook/useShipments"
import { useAppSelector } from "../../store/hooks/useSelector"

const Dashboard = () => {
    const {user} = useAppSelector(state => state.Authentication)
    const { appColors } = useAppTheme()
    const styleSheet = styles(appColors)
    const { shipment, filters, setFilters, isLoading, onRefresh } = useShipments()
    const { bottomSheetRef, openBottomSheet } = useBottomSheet()

    return (
        <Container
            header={<Header />}
            bottomSheetsModal={
                <ShipmentFilterSheet
                    bottomsheetRef={bottomSheetRef}
                    filtersSelected={filters}
                    onSelectFilters={(filter) => {
                        setFilters(filter)
                    }}
                />
            }
        >
            <View style={styleSheet.container}>
                <View style={styleSheet.nameContainer}>
                    <AppText style={styleSheet.hello}>
                        Hello
                    </AppText>
                    <AppText style={styleSheet.name} type={TextTypes.BOLD}>
                        {user?.full_name}
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
                        data={shipment}
                        keyExtractor={(_, idx) => idx?.toString()}
                        renderItem={({ item }) => (
                            <ShipmentCard
                                shipment={item}
                            />
                        )}
                        contentContainerStyle={styleSheet.list}
                        refreshControl={
                            <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
                        }
                        ListEmptyComponent={
                            !isLoading ? (
                                <View style={styleSheet.emptyState}>
                                    <AppText style={styleSheet.emptyStateText}>
                                        No shippments for found
                                    </AppText>
                                    <AppText style={styleSheet.emptyStateText}>
                                        Pull to refresh
                                    </AppText>
                                </View>
                            ) : null
                        }
                    />
                </View>
            </View>
        </Container>
    )
}

export default Dashboard