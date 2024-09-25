import UserSidebar from '@/components/userDashboard/userSidebar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex bg-[#f5f5f5]">
            <UserSidebar />
            <div className="flex-1 p-6 bg-[#f5f5f5]">
                {children}
            </div>
        </div>
    );
};

export default Layout;
