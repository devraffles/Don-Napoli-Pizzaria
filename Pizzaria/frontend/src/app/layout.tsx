import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Don Nápoli Pizzaria - A melhor pizzaria",
  description: "Don Nápoli Pizzaria, a paixão pela pizza se une à tradição italiana para proporcionar uma experiência gastronômica inesquecível. Inspirada nos sabores autênticos de Nápoles, nossa pizzaria oferece um cardápio repleto de opções que celebram a verdadeira essência da pizza italiana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
