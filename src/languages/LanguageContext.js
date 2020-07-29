import React from 'react';
import translations from './translation';

export const LanguageContext = React.createContext();

const LanguageProvider = (props) => {

    const [language, setLanguage] = React.useState("english");
    const [transl, setTranslations] = React.useState(translations.english);

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