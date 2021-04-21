
import Footer from '../Footer';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';

import './styles.css';

function Orders() {
  
  return (
    <>
      <div className="orders-container">
        <StepsHeader />
        <ProductsList />
      </div> 
      <Footer />
    </>
  ) 
}

export default Orders;