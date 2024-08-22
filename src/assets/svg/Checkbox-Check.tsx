import { Path, Rect, Svg } from "react-native-svg"

const CheckboxCheckedIcon = ({size = 20}) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 17 16" fill="none">
            <Rect x="1" y="0.5" width="15" height="15" rx="3.5" fill="#D9E6FD" />
            <Rect x="1" y="0.5" width="15" height="15" rx="3.5" stroke="#2F50C1" />
            <Path d="M12.5 5L7 10.5L4.5 8" stroke="#2F50C1" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}

export default CheckboxCheckedIcon