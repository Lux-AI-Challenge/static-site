import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import 'styles/base.css';
import { useTranslation } from 'react-i18next';
import HomePage from 'pages/Home';
import { LanguageProvider } from 'LanguageContext';
import { Language } from 'languageconsts';
import Specs2021Page from 'pages/Specs/Specs2021';
import Specs2022BetaPage from 'pages/Specs/Specs2022Beta';
import ReactGA from 'react-ga';
import Sponsor2021Page from 'pages/Sponsors/Sponsors2021';
import SponsorS2Page from 'pages/Sponsors/Sponsors2022';
import SpecsS2Page from 'pages/Specs/SpecsS2';

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
          <Route
            exact
            path="/sponsors"
            component={() => <Redirect to="/sponsors-2021" />}
          />
          <Route exact path="/sponsors-2021" component={Sponsor2021Page} />
          <Route exact path="/sponsors-s2" component={SponsorS2Page} />
          <Route exact path="/specs-2021" component={Specs2021Page} />
          <Route exact path="/specs-2022-beta" component={Specs2022BetaPage} />
          <Route exact path="/specs-s2" component={SpecsS2Page} />
        </Switch>
      </LanguageProvider>
    </div>
  );
};

export default App;
