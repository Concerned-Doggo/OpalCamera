import Footer from "@components/Footer";
import "./globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Opal Camera",
  description: "The first webcamdesigned for laptops.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
