import React from "react";
import { PaperProvider, Text, List } from "react-native-paper";

export default function Survey() {
    return <PaperProvider>
        <Text variant="displayMedium">Survey</Text>
        <List.Item>Item</List.Item>
    </PaperProvider>;
}