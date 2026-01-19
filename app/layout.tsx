import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elevate & Prosper",
  description: "Take your tech start-up to the next level!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
