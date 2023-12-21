import React, { useState } from 'react';
import { DatePickerInput } from 'react-native-paper-dates';

const DateInput = ({ label, value, onChange }) => {
    const [open, setOpen] = useState(false);

    return (
        <DatePickerInput
            label={label}
            value={value}
            onChange={onChange}
            onFocus={() => setOpen(true)}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
        />
    );
}

