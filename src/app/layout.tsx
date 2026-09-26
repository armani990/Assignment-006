import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { CardProvider } from "@/context/CardContext";

export const metadata: Metadata = {
  title: "FITLOG",
  description: "Workout Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CardProvider>
          <Navbar />

          {children}

          <Footer />
        </CardProvider>
      </body>
    </html>
  );
}
