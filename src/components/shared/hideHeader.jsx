'use client'
import { usePathname } from "next/navigation";
import Header from "./header";

const HideHeader = () => {
    const pathname = usePathname();
    const hideHeaderFooterPaths = ['/admin', '/admin/', '/user-dashboard', '/user-dashboard/'];
    const hideHeaderFooter = hideHeaderFooterPaths.some((path) => pathname.startsWith(path));

    return (
        <>
            {!hideHeaderFooter && <Header />}
        </>
    );
};

export default HideHeader;