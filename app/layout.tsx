import { Footer2 } from "@/components/footer2";
import { Navbar1 } from "@/components/navbar1";
import properties from "@/data/properties.json";
import { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const InterFont = Geist({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Kenrax" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="llms" href="/llms.txt" type="text/plain" title="Kenrax LLMs.txt" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body
        className={`antialiased ${InterFont.className}`}
      >
        <Providers>
          <header className="sticky top-0 z-50">
            <Navbar1 />
          </header>
          <div className="lg:px-10 px-4">
            <div className="lg: px-2">
              {/* <Suspense> */}
              {children}
              {/* </Suspense> */}
            </div>
            <Footer2 />
          </div>
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://kenrax.in"),
  title: {
    default: properties["company.name"].value.split(" ")[0] + " - Air Oil Filters, Separators",
    template: "%s | Kenrax",
  },
  description: "Kenrax manufactures replacement compressor air-oil filters and separators for OEMs like Atlas Copco, Ingersoll Rand, Elgi, Kaeser etc. Based in Delhi, India.",
  openGraph: {
    siteName: "Kenrax - Air Oil Filters, Separators",
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  applicationName: "Kenrax - Air Oil Filters, Separators",
  appleWebApp: {
    title: "Kenrax - Air Oil Filters, Separators",
    statusBarStyle: "default",
    capable: true
  },
  twitter: {
    card: "summary_large_image",
    site: "@kenrax",
    creator: "@kenrax",
  },
  category: "industrial manufacturing",
};