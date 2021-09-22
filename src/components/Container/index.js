import Header from "../Header";
import '../../styles/Container.css'
import { Footer } from "..";

const Container = ({children, header, footer}) => {
  return ( 
    <div>
      {header && <Header />}
      <div className="container">{children}</div>
      {footer && <Footer />}
    </div>
   );
}
 
export default Container;