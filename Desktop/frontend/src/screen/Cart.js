/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/Cart"; 
import Message from "../components/message/Message";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";

const CartScreen = ({ match, location, history, product }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;
  const isCartEmpty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = (id) => {
    history.push("/login?redirect=shipping");    
  };
  return (
    <Row className="d-flex justify-content-center align-items-center m-auto ">
      <Col md={8}>
        <div className="d-flex justify-content-center align-items-center ">
          <h1>My Cart</h1>
        </div>
        {cartItems.length === 0 ? (
          <Message>
            Your Cart is empty <Link to="/">Go back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/Product${item.product}`}>
                      {item.name}
                    </Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((count) => (
                        <option key={count + 1} value={count + 1}>
                          {count + 1}
                        </option>
                      ))}
                      ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                      items
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => handleRemoveFromCart(item.product)}
                    >
                      <i style={{ color: "red" }} className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        {cartItems.length === 0 ? (
          ""
        ) : (
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h3>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h3>
                <h3>
                  $
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </h3>
              </ListGroupItem>
              <ListGroupItem className="d-flex">
                {isCartEmpty !== 0 && (
                  <Link to="/">
                    <Button
                      className="text-primary rounded d-flex justify-content-center btn-sm
                        btnUpdate"
                      variant="light"
                    >                     
                      Keep Shopping
                    </Button>
                  </Link>
                )}
                <Button
                  onClick={handleCheckout}
                  type="button"
                  variant="light"
                  className="btn-sm btnUpdate rounded ms-auto"
                >
                  checkout
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        )}
      </Col>
    </Row>
  );
};

export default CartScreen;
