import Header from "../Header";
import '../../styles/Container.css'
import { Footer } from "..";

const Container = ({children, header, footer, headerActive}) => {
  return ( 
    <div>
      {header && <Header headerActive={headerActive} />}
      <div className="container">{children}</div>
      {footer && <Footer />}
    </div>
   );
}
 
export default Container;