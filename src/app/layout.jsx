import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "../components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const nunitoSans = localFont({
  src: "./fonts/NunitoSans.ttf",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} `}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
