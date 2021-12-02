import React, { useEffect, useState } from "react";
import Meta from "../components/meta/Meta";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form, 
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails, reviewProduct } from "../redux/actions/Product";
import { PRODUCT_REVIEW_RESET } from "../constants/productConstants";
import Rating from "../components/rating/Rating";
import Loader from "../components/loader/Loader";
import Message from "../components/message/Message";

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const productReview = useSelector((state) => state.productReview);
  const { error: errorReview, success: successReview } = productReview;

  useEffect(() => {
    if (successReview) {
      <Message>Review submitted successfully</Message>;
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_REVIEW_RESET });
    }
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match, successReview]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const handleReview = (e) => {
    e.preventDefault();
    dispatch(reviewProduct(match.params.id, { rating, comment }));
  };

  return (
    <>       
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Meta />
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h4>{product.name}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: ${product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        "In Stock"
                      ) : (
                        <span style={{ color: "red" }}>Out Of Stock</span>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item key={product.id}>
                    <Row>
                      <Col>QTY</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map(
                            (count) => (
                              <option key={count + 1} value={count + 1}>
                                {count + 1}
                              </option>
                            )
                          )}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item className="d-flex">
                  <Link to="/">
                    <Button
                      variant="light"
                      className="my-2 rounded btnUpdate btn-sm mx-auto ms-auto text-primary "
                      type="button"
                      disabled={product.countInStock === 0}
                    >
                      Go Back
                    </Button>
                  </Link>
                  <Button
                    onClick={addToCartHandler}
                    variant="light"
                    className="my-2 rounded btnUpdate  btn-sm ms-auto"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3>Reviews</h3>
              {product.reviews.length === 0 && <Message>No reviews</Message>}
              <ListGroup variant="flush">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={product.id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h3>Write a review</h3>
                  {errorReview && (
                    <Message variant="danger">{errorReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={handleReview}>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        type="submit"
                        variant="light"
                        className="my-2 btnUpdate btn-sm rounded"
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to="/login">Login</Link> to write a review
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
