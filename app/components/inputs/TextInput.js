import React from 'react';
import { TextInput as PaperTextInput } from 'react-native-paper';

const TextInput = ({ label, value, onChangeText }) => {
    return (
        <PaperTextInput
            label={label}
            value={value}
            onChangeText={onChangeText}
        />
    );
};

export default TextInput;
