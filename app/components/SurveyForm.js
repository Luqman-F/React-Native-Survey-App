import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import RadioInput from './inputs/RadioInput';
import DateInput from './inputs/DateInput';
import NumberInput from './inputs/NumberInput';
import TextInput from './inputs/TextInput';
import CheckboxInput from './inputs/CheckboxInput';
import SelectInput from './inputs/SelectInput';


const SurveyForm = ({ question, onSubmit }) => {
    const [values, setValues] = useState({});

    const handleChange = (name, value) => {
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = () => {
        onSubmit(values);
    };

    const renderQuestion = (question) => {
        switch (question.type) {
            case 'radio':
                return (
                    <RadioInput
                        label={question.label}
                        value={values[question.name]}
                        onValueChange={(value) => handleChange(question.name, value)}
                        options={question.options}
                    />
                );
            case 'date':
                return (
                    <DateInput
                        label={question.label}
                        value={values[question.name]}
                        onChange={(value) => handleChange(question.name, value)}
                    />
                );
            case 'number':
                return (
                    <NumberInput
                        label={question.label}
                        value={values[question.name]}
                        onChangeText={(value) => handleChange(question.name, value)}
                    />
                );
            case 'text':
                return (
                    <TextInput
                        label={question.label}
                        value={values[question.name]}
                        onChangeText={(value) => handleChange(question.name, value)}
                    />
                );
            case 'checkbox':
                return (
                    <CheckboxInput
                        label={question.label}
                        value={values[question.name]}
                        onValueChange={(value) => handleChange(question.name, value)}
                    />
                );
            case 'select':
                return (
                    <SelectInput
                        label={question.label}
                        value={values[question.name]}
                        onValueChange={(value) => handleChange(question.name, value)}
                        options={question.options}
                    />
                );
            default:
                return null;
        }
    }

    return (
        <View>
            <View style={styles.questionContainer}>
                <Text>{question.text}</Text>
                {renderQuestion(question)}
            </View>
            <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={handleSubmit}>
                    Submit
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionContainer: {
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default SurveyForm;
