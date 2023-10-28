import "./ui/global.css";
import { inter, lusitana } from "./lib/fonts";
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
