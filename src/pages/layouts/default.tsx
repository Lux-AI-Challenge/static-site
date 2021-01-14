import './default.css';
type LayoutProps = {
  children: JSX.Element;
};
const DefaultLayout = ({ children }: LayoutProps) => {
  return <div className="DefaultLayout">{children}</div>;
};
export default DefaultLayout;
