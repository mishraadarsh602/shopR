import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import {Container,Row} from "react-bootstrap"
import "./style.css";
import Filters from "./Filters";
const Home = () => {
  const {
     state: { products},
  productState:{sort,byStock,byFastDelivery,byRating,searchQuery}} = CartState();

  const transformProducts=()=>{
  let sortedProducts = products;
  //filter section Starts
  if(sort){
    sortedProducts=sortedProducts.sort((a,b)=>(
    sort==="lowToHigh"?a.price-b.price:b.price-a.price
    ))
  }
  if(!byStock) {
    sortedProducts = sortedProducts.filter((prod) => prod.inStock>0);
  }

  if (byFastDelivery) {
    sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
  }

  if (byRating) {
    sortedProducts = sortedProducts.filter(
      (prod) => prod.ratings == byRating
    );
  }

  if (searchQuery) {
    sortedProducts = sortedProducts.filter((prod) =>
      prod.name.toLowerCase().includes(searchQuery)
    );
  }
  return sortedProducts;
}
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        <Container>
          <Row>
              {
                transformProducts().map((prod) => {
                  return <SingleProduct key={prod.id} prod={prod}></SingleProduct>
                })
              }
          
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home