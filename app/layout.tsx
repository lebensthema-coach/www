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
      <head>
        {/* MailerLite Universal */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},l=d.createElement(e),l.async=1,l.src=u,n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');ml('account','1873724');`,
          }}
        />
        {/* End MailerLite Universal */}
      </head>
      <body className={`antialiased ${greatVibes.variable}`}>
        {children}
      </body>
    </html>
  );
}
