import "./globals.scss";
import localFont from "@next/font/local";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const notoSansJP = localFont({
  fallback: ["sans-serif"],
  src: [
    { path: "./ZenMaruGothic-Black.ttf" },
    { path: "./ZenMaruGothic-Bold.ttf" },
    { path: "./ZenMaruGothic-Light.ttf" },
    { path: "./ZenMaruGothic-Medium.ttf" },
    { path: "./ZenMaruGothic-Regular.ttf" },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
