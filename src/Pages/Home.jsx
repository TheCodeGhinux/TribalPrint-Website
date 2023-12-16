import { Hero, Products } from "../Components/Home";
import HowToOrder from "../Components/HowToOrder/HowToOrder";

const Home = () => {
    return ( 
        <div>
            <Hero/>
            <Products/>
            <HowToOrder/>
        </div>
     );
}
 
export default Home;