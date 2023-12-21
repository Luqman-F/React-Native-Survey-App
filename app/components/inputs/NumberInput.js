import React from 'react';
import { TextInput } from 'react-native-paper';

const NumberInput = ({ label, value, onChangeText }) => {
    return (
        <TextInput
            label={label}
            value={value}
            onChangeText={onChangeText}
            keyboardType="numeric" // Set the keyboardType prop to "numeric" for number input
        />
    );
};

export default NumberInput;
