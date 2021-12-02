import React from "react";
import { Link } from "react-router-dom";
import Message from "../components/message/Message";

const Confirmation = () => {
  return (
    <>
      <div className="confirm-root">
        <div className="confirm-text">
          Thank you for shopping with us!
          <br /> Your oder will be ready for pickup in 24 hours <br /> all items
          are ship in 48 hours or less
        </div>
      </div>
      <div className="link-home">
        {" "}
        <Message>
          We have received your order <Link to="/">Keep Shopping</Link>
        </Message>
      </div>
    </>
  );
};

export default Confirmation;
