import { Geist, Geist_Mono, Playwrite_IN } from "next/font/google";
import "./globals.css";
import { FloatingDockDemo } from "@/components/FloatingDock";
import { ReactLenis } from "@/lib/lenis";
import Footer from "@/components/Footer";
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
    <html lang="en" className="dark [color-scheme:dark]">
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${playwrite.variable} antialiased overflow-x-hidden min-h-screen h-full w-full bg-gradient-to-br from-gray-900 via-black to-gray-800`}
        >
          {children}
          <FloatingDockDemo />
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
