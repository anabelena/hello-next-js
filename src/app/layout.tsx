import "./globals.css";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight:"700",
  subsets:['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className={`antialiased`}>{children} 
        <p>Copyright 2025  </p>
      </body>
    </html>
  );
}
