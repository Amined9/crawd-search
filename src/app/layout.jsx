import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
});


export const metadata = {
  title: "Crawder",
  description: "Your search app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="{poppins.className}">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
