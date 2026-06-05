import AdminSidebar
from "../components/adminSidebar/AdminSidebar";

import "./AdminLayout.scss";

const AdminLayout = ({
 children
}:any) => {

 return (

  <div className="admin-layout">

   <AdminSidebar />

   <main className="admin-content">
     {children}
   </main>

  </div>

 );
};

export default AdminLayout;