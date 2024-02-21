import { Metadata, Viewport } from "next";
import { Unbounded } from "next/font/google";
import localFont from "next/font/local";

import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";

import { fetchContacts } from "@/requests";

import meta from "@/data/meta/base.json";

import "./globals.css";

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fff8f2",
  width: "device-width",
  initialScale: 1,
};

const unbounded = Unbounded({
  subsets: ["cyrillic"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-unbounded",
});

const fixelDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/fixeldisplay-light-webfont.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/fixeldisplay-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/fixeldisplay-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/fixeldisplay-semibold-webfont.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-fixelDisplay",
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_MAIN_SITE_URL as string;

  const {
    title,
    description,
    manifest,
    keywords,
    twitter,
    openGraph,
    icons,
    robots,
  } = meta;

  return {
    title: {
      template: `${title} | %s`,
      default: title,
    },
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
    },
    manifest,
    keywords,
    twitter,
    openGraph: { ...openGraph, url: `${baseUrl}` },
    icons,
    robots,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contacts = await fetchContacts();

  return (
    <html lang="uk">
      <body
        className={`${fixelDisplay.variable} ${unbounded.className} bg-color-bg-primary flex flex-col min-h-screen`}
      >
        <Header contacts={contacts} />
        <main>{children}</main>
        <Footer contacts={contacts} />
      </body>
    </html>
  );
}
