import { Mulish } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Ladonut",
  description: "Online Cake Shop Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
