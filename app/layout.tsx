import type { Metadata } from "next";
import { Poppins,Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });


export const metadata: Metadata = {
  title: "Cguru | Frontend Developer Portfolio",
  description: "Cguru's portfolio – a skilled frontend developer showcasing expertise in React, Next.js, and modern web design. Explore projects and skills!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.className} ${poppins.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
