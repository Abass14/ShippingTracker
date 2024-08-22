import { TextProps } from "react-native";
import { TextTypes } from "../../../utils/enum/TextEnums";

export interface IAppText extends TextProps {
    type?: TextTypes
}