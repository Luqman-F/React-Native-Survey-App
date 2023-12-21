import React from "react";
import RealmContext from "./components/RealmContext";
import { PaperProvider } from "react-native-paper";
import { Link } from "expo-router";

export default function App() {
    const { RealmProvider, useRealm, useObject, useQuery } = RealmContext;

    const [surveys] = useQuery(() => {
        return Survey.find();
    }
    );

    return <PaperProvider>
        <RealmProvider>
            <Link href={'/routes'} asChild>
                <Card style={
                    {
                        margin: 10,
                    }
                }>
                    <Card.Cover source={require('../assets/icon.png')} style={{ height: 128 }} />
                    <Card.Title title="Nama Survei" />
                    <Card.Content>
                        <Text>Deskripsi survei</Text>
                    </Card.Content>
                </Card>
            </Link>
        </RealmProvider>
    </PaperProvider>;
}