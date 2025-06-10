import { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "../styles/globals.css";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <main>{children}</main>
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ""}
        />
      </body>
    </html>
  );
}
