// Import components
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
 // Import CSS files
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css"
import "@/public/fonts/flaticon.css";

export const metadata = {
  title: "Seneca - Commodity trading company",
  description: "Seneca commodities Limited is an agricultural commodity trading company that provides sourcing & trading services of agricultural commodities industrial usage(s) while maintaining the highest standards in commodity quality. We strive to bring high quality products for consumers in partnership with some of the world's most successful and sophisticated retailers, wholesalers, importers, packagers, canners, brokers & growers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gray-900 text-white'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
