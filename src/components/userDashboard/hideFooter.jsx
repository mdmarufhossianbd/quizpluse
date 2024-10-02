'use client'
import { usePathname } from "next/navigation";
import Footer from "../shared/footer";

const HideFooter = () => {
    const pathname = usePathname();
    const hideHeaderFooterPaths = ['/admin', '/admin/', '/user-dashboard', '/user-dashboard/'];
    const hideHeaderFooter = hideHeaderFooterPaths.some((path) => pathname.startsWith(path));
    return (
        <>
            {!hideHeaderFooter && <Footer />}
        </>
    );
};

export default HideFooter;