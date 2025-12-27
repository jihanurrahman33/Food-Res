import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import CartProvider from "@/contexts/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Food Res",
    template: "%s | Food Res",
  },
  description: "Food Resturant Reviews",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header>
          <NavBar></NavBar>
        </header>
        <main className="px-4">
          <CartProvider>{children}</CartProvider>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
