import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
