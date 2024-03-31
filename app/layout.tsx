import PageBackground from "@/components/background/background";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageBackground />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
