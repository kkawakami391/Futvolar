import type { Metadata } from "next";
import Nav from "./components/Nav";
import MuiThemeProvider from "./components/MuiThemeProvider";

export const metadata: Metadata = {
  title: "Futvolarg - Futbol en Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <MuiThemeProvider>
            <Nav />
            {children}
          </MuiThemeProvider>
        </main>
      </body>
    </html>
  );
}
