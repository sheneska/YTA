import Header from "./(site)/components/Header";
import Footer from "./(site)/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Young Talent Agency",
  description: "Creator Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

