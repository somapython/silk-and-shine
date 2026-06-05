import { Navigate } from "react-router-dom";

const AdminRoute = ({
children
}:any) => {

const user =
JSON.parse(
localStorage.getItem("user")
|| "null"
);

if(
!user ||
user.role !== "Admin"
)
{
return <Navigate to="/" />;
}

return children;
};

export default AdminRoute;