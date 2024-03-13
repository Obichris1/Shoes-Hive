import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
const inter = Inter({ subsets: ["latin"] });
import "slick-carousel/slick/slick.css";
import { Providers } from "./redux/Providers";
import { store } from "./redux/store";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <Providers>
      <body className="font-[Jost] mx-20 bg-[#F3F2EE]" >
        
        <Header />
        {children}
        <Footer />
      </body>
      </Providers>
    </html>
  );
}
