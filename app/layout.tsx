import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, PT_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _ptMono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pt-mono",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://coreact.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Coreact - Quantum Dot Technology",
    template: "%s | Coreact",
  },
  description:
    "Engineering the future of quantum dot materials and advanced sensor technologies. Transforming displays, imaging, and sensing across industries.",
  keywords: [
    "quantum dots",
    "quantum dot technology",
    "display technology",
    "QD materials",
    "sensor technology",
    "nanomaterials",
    "Coreact",
  ],
  authors: [{ name: "Coreact", url: siteUrl }],
  creator: "Coreact",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Coreact",
    title: "Coreact - Quantum Dot Technology",
    description:
      "Engineering the future of quantum dot materials and advanced sensor technologies. Transforming displays, imaging, and sensing across industries.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Coreact - Quantum Dot Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coreact - Quantum Dot Technology",
    description:
      "Engineering the future of quantum dot materials and advanced sensor technologies.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#141414",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${_ptMono.variable}`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
