import { Footer, Header } from "..";

const Container = ({ children, header, footer, headerActive, className }) => {
  return (
    <>
      {header && <Header headerActive={headerActive} />}
      <div className={className}>{children}</div>
      {footer && <Footer />}
    </>
  );
}

export default Container;