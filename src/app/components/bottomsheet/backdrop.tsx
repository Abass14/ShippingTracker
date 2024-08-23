import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { useMemo } from "react";
import Animated, {
    Extrapolate,
    Extrapolation,
    interpolate,
    useAnimatedStyle,
  } from "react-native-reanimated";
import useAppTheme from "../../hooks/useAppTheme";
import { Dimensions } from "react-native";

const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
    const {appColors} = useAppTheme()
    const height = Dimensions.get('window').height
    // animated variables
    const containerAnimatedStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            animatedIndex.value,
            [0, 1],
            [0, 0.7],
            Extrapolate.CLAMP
        ),
        height: interpolate(
            animatedIndex.value, 
            [0, 1],
            [0, height],
            Extrapolation.CLAMP
        )
    }));

    const containerStyle = useMemo(
        () => [
            style,
            {
                backgroundColor: appColors.black,
                opacity: 0.7,
            },
            containerAnimatedStyle,
        ],
        [style, containerAnimatedStyle]
    );

    return <Animated.View style={containerStyle} />;
};

export default CustomBackdrop