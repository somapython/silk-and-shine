import "./UsersManagement.scss";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import AdminLayout from "../../../layouts/AdminLayout";
import {
  Users,
  Shield,
  User
} from "lucide-react";

const UsersManagement = () => {

  const [users,setUsers] =
    useState<any[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {

    const response =
      await api.get("/Users");

    setUsers(response.data);
  };

  return (

    <AdminLayout>

      <div className="users-page">

        <div className="page-header">

          <div>

            <h1>
              Users Management
            </h1>

            <p>
              Manage customers and admins
            </p>

          </div>

        </div>

        <div className="stats-row">

          <div className="stat-card">

            <Users size={30}/>

            <h2>
              {users.length}
            </h2>

            <p>
              Total Users
            </p>

          </div>

          <div className="stat-card">

            <Shield size={30}/>

            <h2>
              {
                users.filter(
                  x => x.role === "Admin"
                ).length
              }
            </h2>

            <p>
              Admin Users
            </p>

          </div>

        </div>

        <div className="users-table-container">

          <table>

            <thead>

              <tr>
                <th>User</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Role</th>
              </tr>

            </thead>

            <tbody>

              {
                users.map(user => (

                  <tr key={user.id}>

                    <td>

                      <div className="user-info">

                        <div className="avatar">
                          <User size={18}/>
                        </div>

                        <span>
                          {user.fullName}
                        </span>

                      </div>

                    </td>

                    <td>
                      {user.mobile}
                    </td>

                    <td>
                      {user.email}
                    </td>

                    <td>

                     <select
                          value={user.role}
                          onChange={async(e)=>{

                          await api.put(
                          `/Users/${user.id}/role?role=${e.target.value}`
                          );

                          loadUsers();

                          }}
                          >

                          <option>
                          Customer
                          </option>

                          <option>
                          Admin
                          </option>

                          </select>

                    </td>

                  </tr>

                ))
              }

            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>

  );
};

export default UsersManagement;