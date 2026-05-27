import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const headingFont = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading' 
});

const bodyFont = Inter({ 
  subsets: ['latin'], 
  variable: '--font-body' 
});

export const metadata = {
  title: 'Abisola’s Place | The Crown You Never Take Off',
  description: 'Exquisite human hair collections curated for the modern woman who demands nothing less than opulent luxury.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-sans bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}