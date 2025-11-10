import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "Lebensthema Coach - Sergej Tissen",
  description: "Ein Online-Coaching, in dem Du Dein Lebensthema erkennst und tief emotional erlebst. Gemeinsam decken wir die Muster auf, die Dich immer wieder in die selben Schmerzen treiben.",
  keywords: "Lebensthema, Coaching, Online-Coaching, Persönlichkeitsentwicklung, Sergej Tissen, Lebensthemen erkennen, alte Muster durchbrechen",
  authors: [{ name: "Sergej Tissen" }],
  openGraph: {
    title: "Lebensthema Coach - Sergej Tissen",
    description: "Ein Online-Coaching, in dem Du Dein Lebensthema erkennst und tief emotional erlebst. Gemeinsam decken wir die Muster auf, die Dich immer wieder in die selben Schmerzen treiben.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`antialiased ${greatVibes.variable}`}>
        {children}
      </body>
    </html>
  );
}
