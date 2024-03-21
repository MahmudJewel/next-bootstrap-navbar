import { Inter } from "next/font/google";
import "./globals.css";
// components 
import InstallBootstrap from "@/components/bootstrap/InstallBootstrap";
import Navigationbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Navbar-react-bootstrap",
  description: "Developed by Mahmud",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigationbar />
        {children}
        {/* bootstrap  */}
        <InstallBootstrap />
      </body>
    </html>
  );
}
