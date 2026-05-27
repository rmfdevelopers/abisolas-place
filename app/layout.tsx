import { Playfair_Display, Outfit } from 'next/font/google';
import "./globals.css";

const heading = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-heading',
  weight: ['400', '700', '900']
});

const body = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-body',
  weight: ['300', '400', '600']
});

export const metadata = {
  title: "Abisola’s Place | Premium Human Hair Ibadan",
  description: "Exquisite SDD hair, bone straight, and bouncy curls curated for the woman of opulence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}