import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'styles/base.css';
import { useTranslation } from 'react-i18next';
import HomePage from 'pages/Home';
import { LanguageProvider } from 'LanguageContext';
import { Language } from 'languageconsts';

const App = () => {
  const { i18n } = useTranslation();
  const setLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className="App">
      <LanguageProvider value={{ language: i18n.language, setLanguage }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
};

export default App;
