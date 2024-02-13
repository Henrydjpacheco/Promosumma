import type { Metadata } from "next";

import "./globals.css";
import Image from "next/image";
import { dm_sans } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Promosumma",
  description: "This is a web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${dm_sans.className} h-screen w-screen `}>
        <header className="h-1/6  flex">
          <div className="flex ml-3 mt-3 mb-3 w-1/6 justify-end items-end  ">
            <Image
              src="/logo.png"
              width={161}
              height={68}
              className="z-0  "
              alt="Screenshots of the dashboard project showing desktop version"
              priority
            />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
