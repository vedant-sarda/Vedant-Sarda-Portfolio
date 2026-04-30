import "./globals.css";

export const metadata = {
  title: "Vedant Sarda — API Engineer & Full Stack Developer",
  description:
    "Portfolio of Vedant Sarda — API Engineer specializing in MuleSoft and Salesforce integration; Full Stack Developer skilled in Next.js, MERN, and AWS serverless.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
  