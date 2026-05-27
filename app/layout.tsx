import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const heading = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-heading" 
});

const body = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-body" 
});

export const metadata: Metadata = {
  title: "Abisola’s Place | The Crown of Olayinka Bisola Wealth",
  description: "Exquisite human hair collections curated for the woman who speaks in luxury and walks in power.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} font-sans bg-primary text-white`}>
        {children}
      </body>
    </html>
  );
}