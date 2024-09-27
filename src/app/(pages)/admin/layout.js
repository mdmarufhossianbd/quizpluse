'use client'
import AdminSidebar from "@/components/admin/AdminSidebar";
import { usePathname } from "next/navigation";



export default function AdminLayout({ children }) {

  const path = usePathname();

  return (
     <div className="flex flex-col md:flex-row lg:p-4 lg:my-4">
     
       <AdminSidebar/>
        {children}
     </div>
  );
}