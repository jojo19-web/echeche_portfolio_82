import "./globals.css";
import React from "react";

export const metadata = {
  title: "Jonathan Echeche – Portfolio",
  description: "Personal portfolio built with Next.js & Tailwind.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;   // ✅ Fix: add type for children
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}