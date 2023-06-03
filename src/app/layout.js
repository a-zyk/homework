import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

console.log(roboto)
export const metadata = {
  title: "Check your time",
  description: "Hello, I am homework.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
 
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
