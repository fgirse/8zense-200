import React from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
//import Nav from "@/components/layout/nav";
import Footer from "components/layout/footer";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import NavigationBar  from "@/app/(components)/Menubar";

export const metadata = {                                                        
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
          <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className ="fixed h-screen w-full bg-gradient-to-br from-slate-800 via-slate-700 to-gray-800" />
        <ClerkLoading >
          <div className="mt-32 flex flex-col items-center justify-center text-center text-xl text-red-300">
            Loading....
          </div>
          <NavigationBar/>
          </ClerkLoading>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
    </ClerkProvider>

  );
}
                                                                                                                       