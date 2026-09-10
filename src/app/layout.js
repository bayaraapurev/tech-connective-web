import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script"; // Импорт хэвээрээ байна

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ["latin", "cyrillic"],
});

export const metadata = {
  title: "Тех Коннектив ХХК",
  description: "Тех Коннектив компанийн албан ёсны вэб сайт",
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <head>
        <meta name="google-site-verification" content="googlea330e799e52e5834" />

        {/* Google Analytics скриптийг зөвөөр Next.js Script ашиглан бичих */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-333RDHZXQZ"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-333RDHZXQZ');
          `}
        </Script>
      </head>

      <body className={`${roboto.className} antialiased flex flex-col min-h-screen bg-gray-50`}>
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}