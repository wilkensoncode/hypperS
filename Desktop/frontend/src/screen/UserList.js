import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/message/Message";
import Loader from "../components/loader/Loader";
import { listUsers, deleteUser } from "../redux/actions/User";
 
const UserList = ({ history }) => {
  const dispatch = useDispatch();
 
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
      history.push("/admin/users");
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo, successDelete]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th></th>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>             
                  <LinkContainer to={`/user/${user._id}/edit`}>
                    <Button variant="dark" className="btn btn-sm rounded">
                      <i className="fa fa-edit"></i>
                    </Button>
                  </LinkContainer>
                   <Button
                      variant="danger"
                      className="btn btn-sm  rounded"
                      onClick={() => handleDelete(user._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>             
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserList;
