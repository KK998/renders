import "./globals.css";
import { Poppins } from "next/font/google";

const noto = Poppins({
  subsets: ["latin-ext", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "KK Games",
  description: "Free games by kk998",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
