import type { Metadata } from "next";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import PreloaderHost from "./component/ui/PreloaderHost";
import WhatsAppButton from "./component/ui/WhatsAppButton";
import "./component/ui/uistyles.css";
import "./component/sections/SectionStyles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "GPS Trades and Services | Solar Solutions for Homes & Businesses",
  description:
    "GPS Trades and Services delivers reliable solar installation, maintenance, and consultation services for homes and businesses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <PreloaderHost />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
