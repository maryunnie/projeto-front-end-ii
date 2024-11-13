import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Músicas",
  description: "Músicas",
  charset:'UTF-8',
  author:'Marianny Gonçalves',
  keywords:'HTML, CSS, ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
