import AdminSidebar from "@/components/admin/AdminSidebar";



export default function AdminLayout({ children }) {
  return (
     <div className="flex gap-4 max-w-[1230px] mx-auto mt-10 mb-10">
      <div>
        <AdminSidebar/>
      </div>
      {children}
     </div>
  );
}