import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const secret = process.env.NEXT_PUBLIC_AUTH_SECRET;
  const token = await getToken({ req, secret });
  const { pathname } = req.nextUrl;
  
  if (!token) {
    if (pathname.startsWith('/admin') || pathname.startsWith('/user-dashboard') || pathname === '/quizes/:path*') {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // if have token and user want to go /login or /register so redirect using user role
  if (token) {
    if (pathname === '/login' || pathname === '/register') {
      if (token.role === 'ADMIN' && pathname !== '/admin') {
        return NextResponse.redirect(new URL('/admin', req.url));
      } else if (token.role === 'general-user' && pathname !== '/user-dashboard') {
        return NextResponse.redirect(new URL('/user-dashboard', req.url));
      }
    }
  }

  // if user want to go /admin and here user role is not admin
  if (pathname.startsWith('/admin') && token?.role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/user-dashboard', req.url));
  }

  // if user want to go /user-dashboard and here user role is not general-user
  if (pathname.startsWith('/user-dashboard') && token?.role !== 'general-user') {
    return NextResponse.redirect(new URL('/admin', req.url));
  }

  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*', 
    '/admin', 
    '/user-dashboard/:path*', 
    '/user-dashboard', 
    '/login', 
    '/register',
    '/quizes/:path*',
  ],
};
