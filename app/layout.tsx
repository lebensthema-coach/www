import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "In Bearbeitung",
  description: "Diese Seite befindet sich derzeit im Aufbau",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
