import { ReactNode } from "react";
import { StatusBarProps, ViewProps } from "react-native";

export interface IContainer extends ViewProps {
    isScrollable?: boolean
    header?: ReactNode
    statusBarProps?: StatusBarProps,
    bottomSheetsModal?: ReactNode
}