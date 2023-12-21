import React from 'react';
import { Checkbox as PaperCheckbox } from 'react-native-paper';

const CheckboxInput = ({ label, value, onValueChange }) => {
    return (
        <PaperCheckbox.Item
            label={label}
            status={value ? 'checked' : 'unchecked'}
            onPress={() => onValueChange(!value)}
        />
    );
};

export default CheckboxInput;
