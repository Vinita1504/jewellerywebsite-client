import {Open_Sans,Nunito , Montserrat,Lato} from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const openSans = Open_Sans({subsets:["latin"]});
const nunito = Nunito({subsets:["latin"]});
const montserrat = Montserrat({subsets:["latin"]});
const lato = Lato({
  weight: ["100","300","400","700"],
  subsets:["latin"]});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={lato.className}
      > 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
