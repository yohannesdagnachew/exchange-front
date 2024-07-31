import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buy and Sell Birr | USD in Ethiopia", 
  description: "Birr Trade Exchange Ethiopia Currency Exchange Rate Birr to USD ETB to USD ETB to USD Exchange Rate Birr to USD Exchange Rate",
  openGraph: {
    title: "Ethiopian birr to dollar exchange",
    description: "Birr Trade Exchange Ethiopia Currency Exchange Rate Birr to USD ETB to USD ETB to USD Exchange Rate Birr to USD Exchange Rate",
    link: "https://nbe.gov.et/about-us/our-history/",
    siteName: "birrtrade.com"
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
