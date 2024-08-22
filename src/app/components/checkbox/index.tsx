import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import CheckboxCheckedIcon from "../../../assets/svg/Checkbox-Check";
import CheckboxUnCheckedIcon from "../../../assets/svg/Checkbox-Uncheck";
import { ICheckbox } from "./checkbox.types";

const Checkbox = ({isChecked, onChecked, size = 20, ...rest}: ICheckbox) => {
    const [checked, setChecked] = useState(isChecked)

    const handleChecked = () => {
        setChecked(prev => {
            onChecked(!prev)
            return !prev
        })
    }

    return (
        <TouchableOpacity onPress={handleChecked} {...rest}>
            {checked ? <CheckboxCheckedIcon size={size} /> : <CheckboxUnCheckedIcon size={size} />}
        </TouchableOpacity>
    )
}

export default Checkbox