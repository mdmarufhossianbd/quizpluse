import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
    const secret = process.env.NEXT_PUBLIC_AUTH_SECRET;
    const token = await getToken({ req, secret });
    const pathname = req.nextUrl.pathname;

    if (!token && (pathname === '/admin' || pathname === '/user-dashboard')) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    if (token && (pathname === '/login' || pathname === '/register')) {
        if (token.role === 'ADMIN') {
          return NextResponse.redirect(new URL('/admin', req.url));
        } else if (token.role === 'general-user') {
          return NextResponse.redirect(new URL('/user-dashboard', req.url));
        }
    }
    
     // If the user is logged in and is trying to access an admin page but isn't an admin, redirect to user dashboard
    if (pathname.startsWith('/admin') && token?.role !== 'ADMIN') {
        return NextResponse.redirect(new URL('/user-dashboard', req.url));
    }

    // If the user is logged in and is trying to access a user-dashboard page but isn't a general-user, redirect to admin
    if (pathname.startsWith('/user-dashboard') && token?.role !== 'general-user') {
        return NextResponse.redirect(new URL('/admin', req.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/admin', '/user-dashboard/:path*', '/user-dashboard', '/login', '/register'],
};
