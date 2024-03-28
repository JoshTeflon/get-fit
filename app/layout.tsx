import type { Metadata } from "next";
import { Tomorrow, Raleway, DM_Sans } from "next/font/google";
import "./globals.css";

export const tomorrow = Tomorrow({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
export const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600"] });
export const dm_sans = DM_Sans({ subsets: ["latin"], weight: "500" });

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
