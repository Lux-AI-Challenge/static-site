import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core';
import Header from 'components/Header';
import './default.css';
type LayoutProps = {
  children: JSX.Element | JSX.Element[];
  day?: boolean;
};

let outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#00AFBD',
    },
    secondary: {
      main: '#F5A500',
    },
    text: {
      primary: '#F9EFE2',
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

const DefaultLayout = ({ children, day }: LayoutProps) => {
  return (
    <div className="DefaultLayout">
      <ThemeProvider theme={outerTheme}>
        <Header day={day} />
        <div className="container">{children}</div>
      </ThemeProvider>
    </div>
  );
};
export default DefaultLayout;
