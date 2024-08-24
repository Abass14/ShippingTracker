import { Pressable, View } from "react-native"
import Checkbox from "../../../../components/checkbox"
import ShpipmentBox from "../../../../../assets/svg/ShipmentBox"
import AppText from "../../../../components/text"
import ArrowRight from "../../../../../assets/svg/ArrowRight"
import ArrowIndicatorIcon from "../../../../../assets/svg/ShipmentArrowIndicator"
import useAppTheme from "../../../../hooks/useAppTheme"
import { styles } from "./styles"
import { TextTypes } from "../../../../../utils/enum/TextEnums"
import { IShipmentCard } from "./shipment-card.types"
import { useEffect, useState } from "react"
import { shipmentStatusColorMap, shipmentStatusToDisplayName } from "../../../../../utils/shipment"

const ShipmentCard = ({
    shipment,
    isChecked = false,
    onCheck,
    ...rest
}: IShipmentCard) => {
    const { appColors } = useAppTheme()
    const styleSheet = styles(appColors)
    const statusColors = shipmentStatusColorMap(appColors)
    const [checked, setChecked] = useState(isChecked)

    const handleChecked = () => {
        setChecked(!checked)
        onCheck(!checked)
    }

    useEffect(() => {
        setChecked(isChecked)
    }, [isChecked])

    return (
        <Pressable
            style={[styleSheet.container, checked ? styleSheet.active : null]}
            onPress={handleChecked}
            {...rest}
        >
            <Checkbox
                isChecked={checked}
                onChecked={handleChecked}
            />
            <ShpipmentBox />
            <View style={styleSheet.details}>
                <AppText style={styleSheet.awbText}>
                    AWB
                </AppText>
                <AppText type={TextTypes.BOLD} style={styleSheet.id} numberOfLines={1}>
                    {shipment?.name}
                </AppText>
                <View style={styleSheet.detailsRow}>
                    <AppText style={styleSheet.cityText}>
                        {shipment?.origin_city}
                    </AppText>
                    <ArrowRight />
                    <AppText style={styleSheet.cityText}>
                        {shipment?.destination_city}
                    </AppText>
                </View>
            </View>
            <View style={[styleSheet.status, {backgroundColor: statusColors[shipment?.status]?.bg}]}>
                <AppText
                    style={[
                        styleSheet.statusText,
                        {
                            color: statusColors[shipment?.status]?.color
                        }
                    ]}
                    type={TextTypes.MEDIUM}
                >
                    {shipmentStatusToDisplayName[shipment?.status] ?? shipment?.status}
                </AppText>
            </View>
            <ArrowIndicatorIcon />
        </Pressable>
    )
}

export default ShipmentCard