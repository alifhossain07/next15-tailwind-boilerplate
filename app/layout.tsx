import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// 1. Define fonts with variables
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Next.js Boilerplate",
  description: "Created by Alif Hossain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // ✅ Apply font variables directly on html, not body
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="antialiased font-text">
        {children}
      </body>
    </html>
  );
}
