import {CartState} from "../context/Context"
import {Button} from "react-bootstrap";
import {useState,useEffect} from "react";
const Checkoutbar = () => {
  const {state:{cart}} =  CartState();
//   const [totalPrice,setTotalPrice] =useState([]);
const [total, setTotal] = useState();

useEffect(() => {
  setTotal(
    cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
  );
}, [cart]);
  return (
    <div className="checkoutinner">
        <h4 className='text-dark'>Number of  items ({cart.length})</h4>
        <h5 className='text-dark'>Total : $
        {
            total   
        } 
        </h5>
       <Button>Proceed to Checkout!!</Button>
    </div>
  )
}

export default Checkoutbar;