import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import 'styles/base.css';
import { useTranslation } from 'react-i18next';
import HomePage from 'pages/Home';
import SponsorPage from 'pages/Sponsors';
import { LanguageProvider } from 'LanguageContext';
import { Language } from 'languageconsts';
import Specs2021Page from 'pages/Specs/Specs2021';
import ReactGA from 'react-ga';

const App = () => {
  const { i18n } = useTranslation();
  const setLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
  };
  const location = useLocation();
  const [initializedGA, setGa] = useState(false);
  useEffect(() => {
    ReactGA.initialize('UA-201062062-1');
    setGa(true);
  }, []);
  useEffect(() => {
    if (initializedGA) {
      ReactGA.pageview(location.pathname);
    }
  }, [initializedGA, location]);
  return (
    <div className="App">
      <LanguageProvider value={{ language: i18n.language, setLanguage }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sponsors" component={SponsorPage} />
          <Route exact path="/specs-2021" component={Specs2021Page} />
        </Switch>
      </LanguageProvider>
    </div>
  );
};

export default App;
