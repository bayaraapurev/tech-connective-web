import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Footer-ийг оруулж ирж байна

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
      {/* flex-col болон min-h-screen нэмснээр Footer үргэлж хамгийн доор байна */}
      <body className={`${roboto.className} antialiased flex flex-col min-h-screen bg-gray-50`}>
        <Navbar />
        
        {/* Үндсэн контент хэсэг */}
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}