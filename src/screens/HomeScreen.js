import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import { translateText } from '../services/translationService';
import ISO6391 from 'iso-639-1';  // For converting language names to codes

const HomeScreen = ({ navigation }) => {
    const [text, setText] = useState('');
    const [targetLanguage, setTargetLanguage] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const handleTranslate = async () => {
        const languageCode = ISO6391.getCode(targetLanguage.trim());

        if (!languageCode) {
            Alert.alert("Invalid Language", "Please enter a valid language name.");
            return;
        }

        try {
            const translation = await translateText(text, languageCode);
            setTranslatedText(translation);
        } catch (error) {
            console.error("Translation failed:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to SayIt!</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter text to translate"
                onChangeText={setText}
                value={text}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter target language (e.g., 'French')"
                onChangeText={setTargetLanguage}
                value={targetLanguage}
            />
            <Button title="Translate" onPress={handleTranslate} />
            {translatedText ? (
                <Text style={styles.translation}>Translation: {translatedText}</Text>
            ) : (
                <Text style={styles.noTranslation}>No translation available</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    translation: {
        marginTop: 20,
        fontWeight: 'bold',
        color: 'green',
    },
    noTranslation: {
        marginTop: 20,
        color: 'gray',
    },
});

export default HomeScreen;