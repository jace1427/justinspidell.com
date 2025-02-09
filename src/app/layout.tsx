import "@/styles/global.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/ui/nav";
import Footer from "@/components/ui/footer";
import { baseUrl } from "@/lib/sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Justin Spidell",
    template: "%s | jspidell",
  },
  description: "Justin Spidell's personal site.",
  openGraph: {
    title: "Justin Spidell",
    description: "Justin Spidell's personal site.",
    url: baseUrl,
    siteName: "Justin Spidell",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx("text-black bg-white dark:text-white dark:bg-black")}
    >
      <body className="antialiased max-w-6xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
