import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const metadata: Metadata = {
    title: `Hello bootcamp ${new Date().toISOString()}`,
    description: "Generated by create next app",
  };

  return metadata;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className="text-4xl font-bold text-center">Hello bootcamp!</h1>
        {children}
      </body>
    </html>
  );
}
