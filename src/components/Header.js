import { Container, FormControl, Navbar, Dropdown, Badge, Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import "./style.css";
import { NavLink, Outlet } from "react-router-dom";
import { CartState } from "../context/Context";


const Header = () => {

    const { state: { cart },dispatch,productDispatch } = CartState();
    return (
        <>
            <Navbar fixed="top" bg="light" variant="light" style={{ height: 80 }}>
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/"><img width="100px" alt="Logo" src="logo192.png"/></NavLink>
                    </Navbar.Brand>
                    <Navbar.Text className="search">
                        <FormControl  placeholder="Search" className="m-auto"
                        onChange={(e)=>productDispatch({
                            type:"FILTER_BY_SEARCH",
                            payload:e.target.value,
                        })}></FormControl>
                    </Navbar.Text>
                    <Dropdown >
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            <FaShoppingCart color="white" fontSize="25px" />
                            <Badge variant="light">{cart.length}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            <span style={{ padding: 10 }}>
                                {cart.length > 0 ? (

                                    cart.map((prod) => {
                                        return <div key={prod.id}>
                                            <Card >
                                                <Card.Img variant="top" alt={prod.name} src={prod.image} />
                                                <Card.Body>
                                                    <Card.Title>{prod.name}
                                                        <Card.Text>
                                                            <span>Rs {prod.price.split(".")[0]}</span>

                                                        </Card.Text>

                                                    </Card.Title>
                                                   
                                                    <TiDeleteOutline  className="deletebtn" onClick={(() => dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: prod}))}/>

                                            </Card.Body>

                                        </Card>

                                        </div>
                                        
                                    })

                                ) : "Cart is empty"}
                        </span>
                        {cart.length?<NavLink to="/Cart"><Button className="navbtn">VIEW CART</Button></NavLink>:""}

                    </Dropdown.Menu>
                    
                </Dropdown>

            </Container>

        </Navbar >
            <Outlet />
        </>

    )
}


export default Header;
