import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const kantumruySans = localFont({
  src: "./fonts/KantumruyPro-VariableFont_wght.ttf",
  variable: "--font-kantumruy-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Nook",
  description:
    "The goal of this website is to share my hobbies and interests beyond website development, giving others a glimpse into personal aspects of my life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kantumruySans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
