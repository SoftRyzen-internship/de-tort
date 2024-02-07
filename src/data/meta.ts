import { Metadata } from "next";

const { NEXT_PUBLIC_MAIN_SITE_URL = "http://localhost:3000" } = process.env;

const title = "Кондитерська De-tort";
const description = "Онлайн кондитерська De Tort";
const keywords =
  "торт, печиво, капкейк, макарон, чизкейк, кейк-попс, смаколики, солодощі, начинки, кондитерська, бенто-торт, морква-малина, морква-карамель, дуже-карамельний, шоколад, карамель-горіхи, шоколад-ягода, ваніль-ягоди, манго-маракуя, груша-карамель-пекан, кокос-мигдаль, морква-малина, морква-карамель, дуже-карамельний, шоколад, карамель-горіхи, шоколад-ягода, ваніль-ягоди, манго-маракуя";
const locale = "uk_UA";

const openGraphImages = [
  {
    url: "/meta/opengraph-image.jpg",
    width: 1200,
    height: 630,
    alt: "Template",
  },
];

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
    images: openGraphImages,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    images: openGraphImages,
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
