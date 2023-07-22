import { Card, Col, Button } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";
const SingleProduct = ({ prod }) => {
    const {state:{cart},dispatch} = CartState();

  // const [cartToggle, setCartToggle] = useState(true);
  return (

    <Col sm={12} md={6} lg={4}>
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span className="text-gray">$ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div className="del-color">Fast Delivey</div>
            ) : (
              <div className="del-color">4 Days Delivery</div>
            )}
            <Rating   rating={prod.ratings} style={{ cursor: "pointer" }} />

          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button onClick={(()=>dispatch({
                type:"REMOVE_FROM_CART",
                payload:prod
              }))} 
            variant="danger">Remove from cart</Button>
          ) : (
            <Button  onClick={(()=>dispatch({
              type:"ADD_TO_CART",
              payload:prod
            }))} disabled={prod.inStock<=0}>
              {prod.inStock<=0 ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}

          {/* {cartToggle?<Button disabled={prod.inStock<=0} onClick={()=>setCartToggle(false)}>{prod.inStock<=0?"Out of Stock":"Add To Cart"}</Button >: <Button onClick={()=>setCartToggle(true)} variant="danger">Remove from cart</Button>} */}


        </Card.Body>
      </Card>
    </Col>

  )
}

export default SingleProduct;