import { Language } from 'languageconsts';
import React from 'react';
const LanguageContext = React.createContext(
  {} as { language: string; setLanguage: (language: Language) => void }
);

export const LanguageProvider = LanguageContext.Provider;
export const LanguageConsumer = LanguageContext.Consumer;
export default LanguageContext;
