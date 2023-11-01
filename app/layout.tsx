import "./ui/global.css";
import { inter, lusitana } from "./lib/fonts";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Store",
    default: "Official Store for geeks around the world",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
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
