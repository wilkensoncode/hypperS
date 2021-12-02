import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { listProducts } from "../redux/actions/Product";
import Product from "../components/product/Product";
import Message from "../components/message/Message";
import Loader from "../components/loader/Loader";
import Paginate from "../components/pagination/Paginate";
import ProductCarousel from "../components/carousel/Carousel";
import Meta from "../components/meta/Meta";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel/>
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
    
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            page={page}
            pages={pages}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
