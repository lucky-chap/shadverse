import { Provider } from "@/components/provider";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/header";

const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "shadverse",
  description:
    "A collection of projects built with the awesome shadcn-ui component library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Provider attribute="class" defaultTheme="dark">
          <Header />
          <main className="p-5">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
