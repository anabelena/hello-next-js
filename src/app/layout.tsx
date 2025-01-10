import "./globals.css";
import { Geist } from 'next/font/google';

const lato = Geist({
  weight:"700",
  subsets:['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.className}>
      <body className={`antialiased`}>{children} 
        <p>Copyright 2025 -- DEFAULT LAYOUT </p>
      </body>
    </html>
  );
}
