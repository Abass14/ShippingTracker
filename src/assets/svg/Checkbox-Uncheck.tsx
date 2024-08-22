import { Rect, Svg } from "react-native-svg"

const CheckboxUnCheckedIcon = ({size = 20}) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 17 16" fill="none">
            <Rect x="1" y="0.5" width="15" height="15" rx="3.5" fill="white" />
            <Rect x="1" y="0.5" width="15" height="15" rx="3.5" stroke="#757281" />
        </Svg>
    )
}

export default CheckboxUnCheckedIcon