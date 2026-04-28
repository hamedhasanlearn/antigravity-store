import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anti-Gravity Store — Premium Experience",
  description:
    "Discover next-generation products at Anti-Gravity. A full-stack premium shopping experience built with Next.js, Stripe, and 3D animations.",
  keywords: ["Anti-Gravity", "premium store", "next.js", "ecommerce"],
  openGraph: {
    title: "Anti-Gravity Store",
    description: "Premium products. Seamless checkout.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
