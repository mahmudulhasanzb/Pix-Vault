import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OutfitFont = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "PixVault AI - Create stunning images with AI",
  description: "PixVault AI is an AI-powered image generation platform that allows you to create stunning images with AI. ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${OutfitFont.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <main className="max-w-7xl mx-auto">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
