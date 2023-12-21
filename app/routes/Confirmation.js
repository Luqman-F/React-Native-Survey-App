import React from 'react';
// import { View } from 'react-native';
import { PaperProvider, Text, List } from 'react-native-paper';
import { RealmContext } from '../components/RealmContext';

const Confirmation = () => {
    const { RealmProvider, useRealm, useObject, useQuery } = RealmContext;

    const answers = useQuery((realm) => {
        return realm.objects('Answer');
    });
    
    return (
        <RealmProvider>
            <PaperProvider>
                <Text>Confirmation Screen</Text>
                <List.Section>
                    <List.Subheader>Answers:</List.Subheader>
                    {answers.map((answer, index) => (
                        <List.Item key={index} title={answer} />
                    ))}
                </List.Section>
            </PaperProvider>
        </RealmProvider>
    );
};

export default Confirmation;
