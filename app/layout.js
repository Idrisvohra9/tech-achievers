import { Geist, Geist_Mono, Playwrite_IN } from "next/font/google";
import "./globals.css";
import { FloatingDockDemo } from "@/components/FloatingDock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const playwrite = Playwrite_IN({
  variable: "--font-playwrite",
  subsets: ["latin"],
});
export const metadata = {
  title: "Tech Achievers",
  description: "By Idris Vohra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playwrite.variable} antialiased`}
      >
        {children}
        <FloatingDockDemo />
      </body>
    </html>
  );
}
