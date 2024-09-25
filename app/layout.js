import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "maqamaat",
  description: "maqamaat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.variable} antialiased`}>{children}</body>
    </html>
  );
}
