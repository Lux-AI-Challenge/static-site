import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'styles/base.css';
import { useTranslation } from 'react-i18next';
import HomePage from 'pages/Home';
import SponsorPage from 'pages/Sponsors';
import { LanguageProvider } from 'LanguageContext';
import { Language } from 'languageconsts';
import Specs2021Page from 'pages/Specs/Specs2021';

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
            <Route exact path="/sponsors" component={SponsorPage} />
            <Route exact path="/specs-2021" component={Specs2021Page} />
          </Switch>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
};

export default App;
