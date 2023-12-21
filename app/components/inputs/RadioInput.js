import React from 'react';
import { View, Text, RadioButton } from 'react-native-paper';

const RadioInput = ({ label, value, onValueChange, options }) => {
    return (
        <View>
            <Text>{label}</Text>
            {options.map((option, index) => (
                <RadioButton.Item
                    key={index}
                    label={option.label}
                    value={option.value}
                    status={value === option.value ? 'checked' : 'unchecked'}
                    onPress={() => onValueChange(option.value)}
                />
            ))}
        </View>
    );
};

export default RadioInput;
