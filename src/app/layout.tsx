import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";
import MobileMenu from "@/components/mobile-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammed Shnan | Software Engineer",
  description:
    "Hi, I am Mohammed Shnan and I have Six years of Software Development experience, including Five years Specialising in Mobile Development Two years in Backend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " w-full bg-white dark:bg-slate-950 transition-all ease-in-out duration-1000"
        }
      >
        <Providers>
          <Navbar />
          <MobileMenu />
          {children}
        </Providers>
      </body>
    </html>
  );
}
