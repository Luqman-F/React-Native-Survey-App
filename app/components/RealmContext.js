import Realm from 'realm';
import { createRealmContext } from '@realm/react';

export const Survey = {
    name: 'Survey',
    properties: {
        _id: 'objectId',
        name: 'string',
        section: 'Section[]',
        answer: 'Answer[]',
    },
    primaryKey: '_id',
};

export const Section = {
    name: 'Section',
    properties: {
        _id: 'objectId',
        name: 'string',
        question: 'Question[]',
    },
    primaryKey: '_id',
};

export const Question = {
    name: 'Question',
    properties: {
        _id: 'objectId',
        text: 'string',
        type: 'string',
        options: 'string[]',
    },
    primaryKey: '_id',
};

export const Answer = {
    name: 'Answer',
    properties: {
        _id: 'objectId',
        survey: 'Survey',
        question: 'Question',
        value: 'string',
    },
    primaryKey: '_id',
};

const RealmContext = createRealmContext({
    schema: [Survey, Section, Question, Answer],
});

export default RealmContext;