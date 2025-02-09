import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import ReduxProvider from "./store/ReduxProvider";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Furniro",
  description: "Made By Danii",
  icons: {
    icon: "/icons/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}  data-new-gr-c-s-check-loaded="14.1221.0"
 data-gr-ext-installed="">
          <ReduxProvider>
            <Header />
            {children}
            <Footer />
          </ReduxProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
