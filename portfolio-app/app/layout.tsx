import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devroop's Portfolio",
  description: "Modern Portfolio using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
