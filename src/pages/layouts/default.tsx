import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core';
import Header from 'components/Header';
import './default.css';
type LayoutProps = {
  children: JSX.Element;
};

let outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#00AFBD',
      contrastText: '#000',
    },
    secondary: {
      main: '#F5A500',
      contrastText: '#000',
    },
    text: {
      primary: '#F9EFE2',
      secondary: '#000',
    },
  },
  typography: {
    htmlFontSize: 12,
    button: {
      fontWeight: 'normal',
      fontSize: 14,
      textTransform: 'none',
    },
  },
});
outerTheme = responsiveFontSizes(outerTheme);

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <div className="DefaultLayout">
      <ThemeProvider theme={outerTheme}>
        <Header />
        <div className="container">{children}</div>
      </ThemeProvider>
    </div>
  );
};
export default DefaultLayout;
