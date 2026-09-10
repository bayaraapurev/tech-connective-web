import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script"; // 1. Script-ийг импорт хийх

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
      {/* 2. Энд <head> хэсгийг нэмж Google скрипт болон meta кодоо байрлуулна */}
      <head>
        {/* Google Search Console баталгаажуулах мета код (Хэрэв байгаа бол) */}
        <meta name="google-site-verification" content="googlea330e799e52e5834" />

        {/* Google Analytics скрипт */}
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-333RDHZXQZ"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-333RDHZXQZ');
        </script>
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