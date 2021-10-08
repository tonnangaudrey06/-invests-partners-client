import { Footer, Header } from "..";

const Container = ({ children, header, footer, headerActive }) => {
  return (
    <>
      {header && <Header headerActive={headerActive} />}
      <div>{children}</div>
      {footer && <Footer />}
    </>
  );
}

export default Container;