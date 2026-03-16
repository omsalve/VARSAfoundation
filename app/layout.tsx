import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

/* ── Root Metadata ── */
export const metadata: Metadata = {
  title: "VARSA Foundation — Empowering Communities, Transforming Lives",
  description:
    "VARSA Foundation is a social work NGO dedicated to women empowerment, health & hygiene, education, and community development across India.",
  keywords: ["NGO", "VARSA Foundation", "women empowerment", "community development", "donate", "volunteer"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
          {children}
        
      </body>
    </html>
  );
}