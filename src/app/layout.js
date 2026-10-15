
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Chowdhury Shakil Hasan — Software Developer",
  description:
    "Portfolio of Chowdhury Shakil Hasan: software development, selected web projects, industry experience, and IEEE conference research.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-initializer" strategy="beforeInteractive">
          {`try { const theme = localStorage.getItem("shakil-portfolio-theme"); if (theme === "light" || theme === "dark") document.documentElement.dataset.theme = theme; } catch {}`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
