"use client";
// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { StoreProvider } from "./redux/StoreProvider";
import { useAppSelector } from "./redux/hooks";
import { useEffect, useState } from "react";

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

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <DarkModeWrapper>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-blue-950`}
        >
          {children}
        </body>
      </DarkModeWrapper>
    </StoreProvider>
  );
}

const DarkModeWrapper = ({ children }: { children: React.ReactNode }) => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <html lang="en">{children}</html>;
  }

  return (
    <html lang="en" className={`${darkMode ? "dark" : ""}`}>
      {children}
    </html>
  );
};
