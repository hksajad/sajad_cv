import localFont from "next/font/local";
import "./globals.css";

const font = localFont({
  src: [
    {
      path: "../public/fonts/ANegaar.ttf",
    },
  ],
});

export const metadata = {
  title: "سجاد حسنی کاخ",
  description: "طراح و برنامه نویس وب / کرمان",
  icons: {
    icon: "/img/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={font.className}>{children}</body>
    </html>
  );
}
