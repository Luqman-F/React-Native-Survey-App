import React from 'react';
import { Picker as SelectPicker } from 'react-native';

const SelectInput = ({ label, value, onValueChange, options }) => {
    return (
        <SelectPicker
            selectedValue={value}
            onValueChange={onValueChange}
        >
            {options.map((option, index) => (
                <SelectPicker.Item
                    key={index}
                    label={option.label}
                    value={option.value}
                />
            ))}
        </SelectPicker>
    );
};

export default SelectInput;
