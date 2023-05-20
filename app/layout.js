'use client'
import Nav from "@/components/Nav";
import StyledComponentsRegistry from "@/lib/registery";
import { GlobalStyles } from "@/styles/GlobalStyles";
 
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>H RETAIL</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <GlobalStyles/>
        <StyledComponentsRegistry>
          <Nav/>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}