import type { Metadata } from "next";
import "./bootstrap.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Survivor Pool Season 49",
  description: "Outwit. Outplay. Outlast.",
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
