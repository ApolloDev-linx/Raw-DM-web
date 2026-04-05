import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAW DM Detailing",
  description: "interior and exterior detailing with premium results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
