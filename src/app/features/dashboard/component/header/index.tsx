import { Image, View } from "react-native"
import { Images } from "../../../../../utils/image"
import AppIcon from "../../../../../assets/svg/AppIcon"
import useAppTheme from "../../../../hooks/useAppTheme"
import NotificationIcon from "../../../../../assets/svg/NotificationIcon"
import { styles } from "./styles"

const Header = () => {
    const {appColors} = useAppTheme()
    return (
        <View style={styles.container}>
            <Image 
                source={Images.profile}
                style={styles.image}
            />
            <View style={styles.center}>
                <AppIcon color={appColors.royalBlue} width={92} height={16} />
            </View>
            <NotificationIcon />
        </View>
    )
}

export default Header