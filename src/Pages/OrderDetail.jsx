import HowToOrderLight from "../Components/HowToOrder/HowToOrderLight";
import OrderPage from "../Components/Order/OrderPage";
import OrderSummary from "../Components/Order/OrderSummary";

const OrderDetail = () => {
    return ( 
        <div>
            <OrderSummary/>
            <HowToOrderLight/>
        </div>
     );
}
 
export default OrderDetail;