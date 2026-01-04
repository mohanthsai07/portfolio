import "./globals.css";
import PortfolioHeader from "@/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PortfolioHeader />   {/* HEADER */}
        {children}            {/* page.tsx content */}
      </body>
    </html>
  );
}
