import "./ui/global.css";
import { inter, lusitana } from "./lib/fonts";
import { Metadata } from "next";

export const meta: Metadata = {
  title: "Acme Inc. - Next.js 14 Starter",
  description: "A starter for Next.js 14 through Nextjs/Learn",
  icons: [
    {
      url: "/favicon.png",
      type: "image/x-icon",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lusitana.variable} `}>
      <body className="font-inter">{children}</body>
    </html>
  );
}
