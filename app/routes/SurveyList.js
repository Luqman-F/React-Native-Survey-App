import React from "react";
import { List, Divider, Card } from "react-native-paper";
import { RealmContext, Survey} from "../components/RealmContext";

const SurveyList = () => {
    const { RealmProvider, useRealm, useObject, useQuery } = RealmContext;

    const [surveys] = useQuery(() => {
        return Survey.find();
    }
    );
    
    return (
        <RealmProvider>
            <List.Section>
                {surveys.map((survey) => (
                    <React.Fragment key={survey.id}>
                        <Card>
                            <Card.Content>
                                <List.Item title={survey.title} />
                            </Card.Content>
                        </Card>
                        <Divider />
                    </React.Fragment>
                ))}
            </List.Section>
        </RealmProvider>
    );
};

export default SurveyList;
