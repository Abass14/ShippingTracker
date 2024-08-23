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
import { useState } from "react"
import { shipmentStatusColorMap } from "../../../../../utils/shipment"

const ShipmentCard = ({
    shipment,
    ...rest
}: IShipmentCard) => {
    const { appColors } = useAppTheme()
    const styleSheet = styles(appColors)
    const statusColors = shipmentStatusColorMap(appColors)
    const [checked, setChecked] = useState(false)

    return (
        <Pressable
            style={[styleSheet.container, checked ? styleSheet.active : null]}
            {...rest}
        >
            <Checkbox
                isChecked={checked}
                onChecked={setChecked}
            />
            <ShpipmentBox />
            <View style={styleSheet.details}>
                <AppText style={styleSheet.awbText}>
                    {shipment?.name}
                </AppText>
                <AppText type={TextTypes.BOLD} style={styleSheet.id} numberOfLines={1}>
                    {shipment?.id}
                </AppText>
                <View style={styleSheet.detailsRow}>
                    <AppText style={styleSheet.cityText}>
                        {shipment?.from}
                    </AppText>
                    <ArrowRight />
                    <AppText style={styleSheet.cityText}>
                        {shipment?.to}
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
                    {shipment?.status}
                </AppText>
            </View>
            <ArrowIndicatorIcon />
        </Pressable>
    )
}

export default ShipmentCard