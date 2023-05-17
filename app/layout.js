'use client'
import Nav from "@/components/Nav";
import StyledComponentsRegistry from "@/lib/registery";
import { GlobalStyles } from "@/styles/GlobalStyles";
import Head from "next/head";
 
export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <title>H RETAIL</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <GlobalStyles/>
        <Nav/>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}