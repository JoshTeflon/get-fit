import type { Metadata } from "next";

import { raleway } from "@/utils/fonts";
import "./globals.css";

// export const metadata: Metadata = {
const metadata: Metadata = {
  title: "Get Fit",
  description: "Get Fit...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-theme text-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
