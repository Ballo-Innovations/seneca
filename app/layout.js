// Import components
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
 // Import CSS files
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css"
import "@/public/fonts/flaticon.css";
import siteMetadata from "@/siteMetaData";

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  creator: siteMetadata.author,
  publisher: siteMetadata.author,
  category: siteMetadata.keywords,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: siteMetadata.socialBanner,
  },
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
