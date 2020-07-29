import React from 'react';
import translations from './translation';

export const LanguageContext = React.createContext();

const LanguageProvider = (props) => {

    const l = localStorage.getItem('language');
    const [language, setLanguage] = React.useState(l ? l : "english");
    const [transl, setTranslations] = React.useState(translations[language]);

    const changeLanguage = (language) => {
        setLanguage(language);
        setTranslations(translations[language]);
    }

    return (
        <LanguageContext.Provider
            value={{
                language,
                transl,
                changeLanguage: changeLanguage
            }}
        >
            {props.children}
        </LanguageContext.Provider>
    );
}

export default LanguageProvider;