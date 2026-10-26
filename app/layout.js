import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Next.js og WordPress",
  description: "Mit projekt med Next.js og headless WordPress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
