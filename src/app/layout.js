import HideFooter from "@/components/userDashboard/hideFooter";
import HideHeader from "@/components/userDashboard/hideHeader";
import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "./service/authProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "QuizPluse",
  description: "QuizPluse is the best quiz app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <HideHeader />
          {children}
          <HideFooter />
        </body>
      </AuthProvider>
    </html>
  );
}
