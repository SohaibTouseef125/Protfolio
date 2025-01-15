import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import { icons, Link, LinkIcon } from "lucide-react";
import { url } from "inspector";
import { type } from "os";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Next.js Portfolio Sohaib",
    default:
      "Next.js Portfolio Created with Three.js and Tailwind CSS by Sohaib",
      icons: {
        icon:"/assest/logo.jpg"
      },
  },
  description:
    "A unique creative portfolio designed by Sohaib with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}