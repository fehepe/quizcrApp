import React, { useState } from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    Toast,
} from 'react-native';
import { COLORS } from '../constants/theme';
import { useNavigation } from "@react-navigation/native";
import FormInput from '../components/shared/FormInput';
import { createQuestion } from '../utils/database';
import FormButton from '../components/shared/FormButton';

const AddQuestionScreen = () => {

    const navigation = useNavigation();

    const [question, setQuestion] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [optionTwo, setOptionTwo] = useState('');
    const [optionThree, setOptionThree] = useState('');
    const [optionFour, setOptionFour] = useState('');

    const handleQuestionSave = async () => {
        if (
            question == '' ||
            correctAnswer == '' ||
            optionTwo == '' ||
            optionThree == '' ||
            optionFour == ''
        ) {
            return;
        }

        // Add question to db
        await createQuestion({
            question: question,
            correct_option: correctAnswer,
            options: [optionTwo, correctAnswer, optionThree, optionFour],
        });

      // Toast.show('Question saved',Toast.LONG);

        // Reset
        setQuestion('');
        setCorrectAnswer('');
        setOptionTwo('');
        setOptionThree('');
        setOptionFour('');
    };


    return (
        <KeyboardAvoidingView
            style={{
                flex: 1,
            }}>
            <ScrollView
                style={{

                    flex: 1,
                    backgroundColor: COLORS.white,
                }}>
                <View style={{ padding: 20 }}>
                    <Text
                        style={{ fontSize: 20, textAlign: 'center', color: COLORS.black }}>
                        Add Question
                    </Text>

                    <FormInput
                        labelText="Question"
                        placeholderText="enter question"
                        onChangeText={val => setQuestion(val)}
                        value={question}
                    />
                    {/* Options */}
                    <View style={{ marginTop: 30 }}>
                        <FormInput
                            labelText="Correct Answer"
                            onChangeText={val => setCorrectAnswer(val)}
                            value={correctAnswer}
                        />
                        <FormInput
                            labelText="Option 2"
                            onChangeText={val => setOptionTwo(val)}
                            value={optionTwo}
                        />
                        <FormInput
                            labelText="Option 3"
                            onChangeText={val => setOptionThree(val)}
                            value={optionThree}
                        />
                        <FormInput
                            labelText="Option 4"
                            onChangeText={val => setOptionFour(val)}
                            value={optionFour}
                        />
                    </View>
                    <FormButton
                        labelText="Save Question"
                        handleOnPress={handleQuestionSave}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default AddQuestionScreen;
