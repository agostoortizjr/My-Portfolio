import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agosto Ortiz Jr. | Construction Technology Founder",
  description:
    "Founder-style portfolio for Agosto Ortiz, construction technology engineer and founder of Constracker, an intelligent construction management SaaS platform.",
  keywords: [
    "Construction Technology Engineer",
    "Constracker",
    "Construction SaaS",
    "Founder Portfolio",
    "Enterprise Software",
    "Project Management",
    "Construction Safety",
  ],
  authors: [{ name: "Agosto Ortiz Jr." }],
  creator: "Agosto Ortiz Jr.",
  openGraph: {
    title: "Agosto Ortiz | Building the Future of Construction Through Technology",
    description:
      "Founder of Constracker, an intelligent construction management platform for safer planning and project execution.",
    url: "https://agosto-ortiz.com",
    siteName: "Agosto Ortiz Jr.",
    images: [
      {
        url: "/images/construction-field.avif",
        width: 1200,
        height: 630,
        alt: "Construction technology portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agosto Ortiz Jr. | Construction Technology Founder",
    description:
      "Constracker founder building intelligent construction management software.",
    images: ["/images/construction-field.avif"],
  },
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL("https://agosto-ortiz.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white font-sans text-ink antialiased dark:bg-[#061423] dark:text-white">
        {children}
      </body>
    </html>
  );
}
