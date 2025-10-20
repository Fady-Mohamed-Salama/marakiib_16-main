import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import { UserTypeProvider } from "@/Contexts/UserTypeContext";
import Footer from "@/Components/Footer/Footer";

import { AuthProvider } from "@/Contexts/AuthContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
});

// const montserratMono = Montserrat({
//   variable: "--font-montserrat-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Marakiib",
  description: "Marakiib - Car Rental Platform",
  icons: {
    icon: "/images/logo4.png", // أو "/favicon.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} flex flex-col min-h-screen`}>
        <AuthProvider>
          <UserTypeProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer className="mt-auto" />
          </UserTypeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
//  <AuthProvider>
//           {children}
//         </AuthProvider>
