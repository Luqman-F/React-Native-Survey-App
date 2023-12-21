import React from "react";
import { Text, Image } from "react-native";
import { Link } from "expo-router";
import { PaperProvider, Card } from "react-native-paper";

export default function App() {
  return <PaperProvider>
    <Image source={require('../assets/favicon.png')} />
    <Link href={'/routes'} asChild>
        <Card style={
            {
                margin: 10,
            }
        }>
            <Card.Cover source={require('../assets/icon.png')} style={{height:128}}/>
            <Card.Title title="Nama Survei" />
            <Card.Content>
                <Text>Deskripsi survei</Text>
            </Card.Content>
        </Card>
    </Link>
    </PaperProvider>;
}