import "./globals.css";

  export const metadata = {
    title: "Vedant Sarda — API Engineer & Full Stack Developer",
    description:
      "Portfolio of Vedant Sarda — API Engineer specializing in MuleSoft and Salesforce integration; Full Stack Developer skilled in Next.js, MERN, and AWS serverless.",
  };

  export default function RootLayout({ children }) {
    return (
      <html lang="en" className="dark" suppressHydrationWarning>
        <body>{children}</body>
      </html>
    );
  }
  