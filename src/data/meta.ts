import { Metadata } from "next";

import data from "@/data/meta-constants.json";

const { title, description, keywords, locale, images } = data;

const { NEXT_PUBLIC_MAIN_SITE_URL = "http://localhost:3000" } = process.env;

const meta: Metadata = {
  title,
  description,
  keywords,
  metadataBase: new URL(NEXT_PUBLIC_MAIN_SITE_URL as string),
  alternates: {
    canonical: NEXT_PUBLIC_MAIN_SITE_URL as string,
  },
  manifest: "/meta/site.webmanifest",
  openGraph: {
    title,
    description,
    url: NEXT_PUBLIC_MAIN_SITE_URL as string,
    siteName: title,
    locale,
    type: "website",
    images,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    images,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  icons: {
    icon: [
      {
        url: "/meta/favicon.ico",
      },
      {
        url: "/meta/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/meta/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/meta/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/meta/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: "/meta/favicon.ico",
    apple: "/meta/apple-touch-icon.png",
    other: {
      rel: "/meta/apple-touch-icon.png",
      url: "/meta/apple-touch-icon.png",
    },
  },
};

export default meta;
