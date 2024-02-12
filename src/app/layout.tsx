import { Metadata, Viewport } from "next";
import { Unbounded } from "next/font/google";
import localFont from "next/font/local";

import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";

import { fetchContacts } from "@/requests";

import meta from "@/data/meta";

import "./globals.css";

export const metadata: Metadata = meta;

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fff8f2",
  width: "device-width",
  initialScale: 1,
};

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unbounded",
});

const fixelDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/FixelDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/FixelDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/FixelDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/FixelDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-fixelDisplay",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contacts = await fetchContacts();

  return (
    <html lang="uk">
      <body className={`${fixelDisplay.variable} ${unbounded.className}`}>
        <Header contacts={contacts} />
        <main>{children}</main>
        <Footer contacts={contacts} />
      </body>
    </html>
  );
}
