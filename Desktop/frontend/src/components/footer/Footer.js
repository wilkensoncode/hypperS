import React from 'react'
import { Container, Row,Col } from "react-bootstrap";
const footer = () => {
    return (
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">Copyright &copy; EasyShop</Col>
            {/* <Col>{Date().toLocaleString().substring(0, 16)} </Col> */}
          </Row>
        </Container>
      </footer>
    );
}

export default footer
