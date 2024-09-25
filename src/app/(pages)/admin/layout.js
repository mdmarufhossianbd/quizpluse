import AdminSidebar from "@/components/admin/AdminSidebar";



export default function AdminLayout({ children }) {
  return (
     <div className="flex flex-col md:flex-row lg:p-4 lg:my-4">
     
       <AdminSidebar/>
      {children}
     </div>
  );
}