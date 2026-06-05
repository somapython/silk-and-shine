import "./UsersManagement.scss";
import { useEffect,useState } from "react";
import api from "../../../services/api";

const UsersManagement = () => {

  const [users,setUsers] =
  useState<any[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers =
  async() =>
  {
    const response =
      await api.get(
        "/Users"
      );

    setUsers(
      response.data
    );
  };

  return (
    <div className="admin-page">

      <h1>
        Users
      </h1>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>

          {
            users.map(user => (

              <tr key={user.id}>
                <td>{user.fullName}</td>
                <td>{user.mobile}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>

            ))
          }

        </tbody>

      </table>

    </div>
  );
};

export default UsersManagement;