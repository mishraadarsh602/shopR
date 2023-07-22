import { createContext, useReducer,useContext} from 'react'
import { faker } from '@faker-js/faker';
import {cartReducer,productReducer} from "./Reducer";
const Cart =  createContext();
faker.seed(99);
const Context = ({children}) => {
  const products = [...Array(20)].map(()=>({
    id:faker.string.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.image.urlPicsumPhotos(),
    inStock:faker.helpers.arrayElements([0,3,5,6,7],1),
    fastDelivery:faker.datatype.boolean(),
    ratings:faker.helpers.arrayElements([1, 2, 3, 4, 5],1)
   
  }))
  
//for managing cart and product state
 const [state,dispatch] = useReducer(cartReducer,{
   products:products,
   cart:[]
 });
//for filter 
 const [productState,productDispatch] = useReducer(productReducer,{
  byStock:false,
  byFastDelivery:false,
  byRating:0,
  searchQuery:"",
  
 })

//  console.log(state.cart);
  return  <Cart.Provider value={{state,dispatch,productState,productDispatch}}>
            {children}
        </Cart.Provider>
  
}

export default Context;

export const CartState=()=>{
  return useContext(Cart);
}