'use client'
import Nav from "@/components/Nav";
import StyledComponentsRegistry from "@/lib/registery";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ['latin'],
  variable: '--poppins-default'
});
 
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>H LOYALTY</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={poppins.className}>
        <GlobalStyles/>
        <StyledComponentsRegistry>
          <Nav/>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}