import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../redux/actions/Cart";
import FormContainer from "../components/form/Form";
import Checkout from "../components/checkout/Checkout";

const PaymentMethod = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("payPal");

  const dispatch = useDispatch();

  const handlePaymentMethod = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <FormContainer>
      <Form onSubmit={handlePaymentMethod}>
        <Checkout step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button
          className="my-3 btnUpdate btn-sm d-flex ms-auto rounded"
          type="submit"
          variant="light"
        >
          Next
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentMethod;
