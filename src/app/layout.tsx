import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { navMenus } from "@/data/navMenus";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

export const metadata: Metadata = {
  title: "Daqinix",
  description:
  "A versatile Full Stack Developer from Australia, specializing in Roblox game development, advanced systems integration, and innovative UI/UX design. Owner of 'Fast Food Roleplays' Roblox group, and creator of Hexly, a modern HR management tool.",
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
  icons: [
    {
      url: "https://ffrp.xyz/darlogo.png",
      rel: "icon",
      sizes: "16x16",
      type: "image/x-icon",
    },
    {
      url: "https://ffrp.xyz/darlogo.png",
      rel: "icon",
      sizes: "32x32",
      type: "image/x-icon",
    },
    {
      url: "https://ffrp.xyz/darlogo.png",
      rel: "icon",
      sizes: "48x48",
      type: "image/x-icon",
    },
    {
      url: "https://ffrp.xyz/darlogo.png",
      rel: "icon",
      sizes: "64x64",
      type: "image/x-icon",
    },
  ],
  keywords: [
    "daqinix", "full stack developer", "roblox developer", "hexly", "fast food roleplays", 
    "web developer", "software engineer", "nextjs", "javascript", "ui/ux", "react", "moodle integration",
    "server-side scripting", "php", "discord bot development", "daqinix"
  ],
   openGraph: {
    title: "Daqinix – Official Site",
    description: "The only official YouTube: @daqinix",
    url: "https://www.daqinix.com",
    siteName: "Daqinix Official",
    images: [
      {
        url: "https://ffrp.xyz/daqinix.png",
        width: 1200,
        height: 630,
        alt: "Daqinix Official Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daqinix Official",
    description: "The official website of Daqinix, creator of @daqinix on YouTube.",
    images: ["https://ffrp.xyz/daqinix.png"],
    creator: "@daqinix",
  },
  other: {
    "youtube:channel": "https://www.youtube.com/@daqinix",
  },

};

const GoogleAnalytics = dynamic(
  () => import("@/components/common/GoogleAnalytics"),
  { ssr: false }
);
const WebVitals = dynamic(() => import("@/components/common/WebVitals"), {
  ssr: false,
});
const FloatingNavbar = dynamic(
  () => import("@/components/navbar/FloatingNavbar")
);
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const isDebug = process.env.NODE_ENV === "development";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      {isDebug ? null : <GoogleAnalytics />}

      <body className={isDebug ? "debug-screens" : ""}>
        {isDebug ? <WebVitals /> : null}
        <FloatingNavbar className="app_nav" navItems={navMenus} />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
