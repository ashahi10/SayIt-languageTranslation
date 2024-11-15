import axios from 'axios';
import { GOOGLE_API_KEY } from '@env';

export const translateText = async (text, targetLanguage = 'es') => {
  try {
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2`,
      null,
      {
        params: {
          q: text,                   // Text to translate
          target: targetLanguage,    // Target language code (e.g., 'es' for Spanish)
          key: GOOGLE_API_KEY,       // API key from environment variables
        },
      }
    );
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('API response error:', error.response?.data || error.message);
    throw error;
  }
};
