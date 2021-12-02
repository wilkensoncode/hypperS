import React from "react";
import { Link, Route} from "react-router-dom";
import SearchBox from "../search/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/User";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./styles.css";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;
  const { userInfo } = userLogin;

  const handleLogout = () => {
    dispatch(logout());
  };

  const isCartEmpty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const getCartCount = () => {    
    return isCartEmpty;
  }; 

  return (
    <header className=" sticky-top">
      <Navbar expand="lg" collapseOnSelect className="header">
        <Container className="m-auto">
          <LinkContainer to="/" className="justify-content-end flex-grow-1">
            <Navbar.Brand>             
              <Link className="">EasyShop</Link>
            </Navbar.Brand>
          </LinkContainer>
          <span className="hamburgerIcon">
            <Navbar.Toggle aria-controls="toggle-navbar " />
          </span>
          <Route
            render={({ history }) => (
              <SearchBox className="search_hover" history={history} />
            )}
          />
          <Navbar.Collapse id="toggle-navbar" variant="primary">
            <Nav className="mx-auto justify-content-end flex-grow-1 ">
              <LinkContainer to="/cart">
                <Nav.Link variant="primary">
                  {isCartEmpty !==0&&(
                    <div className="cart_container">
                      <span className="link_hover m-2">Cart</span>
                      <i className="mx-3  fas fa-shopping-cart">
                        <span className="cart_icon">{getCartCount()}</span>
                      </i>
                    </div>
                  )}
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown
                  title={<span className="link_hover">{userInfo.name}</span>}
                  id="Username"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/myorders">
                    <NavDropdown.Item>MyOrders</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link variant="primary">
                    <i className="fas fa-user"></i>
                    <span className="link_hover"> Sign In</span>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="admin">
                  <LinkContainer to="/admin/users">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/products">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/orders">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
