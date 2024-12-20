import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, MonteCarlo } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});
const monteCarlo = MonteCarlo({
  subsets: ["latin"],
  variable: "--font-monte-carlo",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Bookklub",
  description: "The best place to read and rent a book",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${monteCarlo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
