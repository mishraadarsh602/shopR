import { Card, Container, Row, Col,Form,Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import { AiTwotoneDelete } from "react-icons/ai";
import Rating from "./Rating"
import Checkoutbar from "./Checkoutbar";
const Cart = () => {
  const { state: { cart }, dispatch } = CartState();
 
  return (
    <Container className="cartPage">
      <Row>
        <Col md={8}>
          <div style={{ padding: 10 }}>
            {cart.length > 0 ? (

              cart.map((prod) => {
                return <div key={prod.id}>
                  <Card >
                    <Card.Img variant="top" alt={prod.name} src={prod.image} />
                    <Card.Body>
                      <Card.Title>{prod.name}
                        <Card.Text>
                          <span>$ {prod.price.split(".")[0]}</span>

                        </Card.Text>
                        {/*below code onclick aded to stop the onclick error*/}
                        <Rating   rating={prod.ratings} style={{ cursor: "pointer" }} />


                      </Card.Title>
                   
                      <Form.Control as="select" value={prod.qty} size="sm" onChange={(e)=>dispatch({
                        type:"CHANGE_CART_QTY",
                        payload:{
                          qty:e.target.value,
                          id:prod.id
                        }
                      })}>
                       
                        {[...Array(Math.min(prod.inStock)).keys()].map((quantity) => (
                            <option key={quantity + 1}>{quantity + 1}</option>
                          ))}
     
                      </Form.Control>
                      <Button variant="light">
                      
                       <span className="cartDel"><AiTwotoneDelete title="Delete" className="deletebtn1" onClick={(() => dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod
                      }))}/></span> 
                      </Button>
                      
                    </Card.Body>

                  </Card>

                </div>
              })

            ) : <h1 className="text-danger">Cart is empty</h1>}
          </div>
        </Col>
        <Col md={4}>
          <div className="checkout">
            <Checkoutbar />
          </div>
        </Col>

      </Row>
    </Container>
  )
}

export default Cart