import type { Metadata } from "next";
import "./styles/globals.css";
import { DotLHeader } from "./components/DotLHeader";

export const metadata: Metadata = {
  title: "DotL Server",
  description: "DotL server to upload and stream videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <DotLHeader></DotLHeader>
        <main className="flex max-h-screen flex-start justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
