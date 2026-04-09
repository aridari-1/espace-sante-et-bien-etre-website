export const metadata = {
  title: "Espace Santé et Bien Être",
  description: "Produits cosmétiques et bien-être de haute qualité",
  viewport: "width=device-width, initial-scale=1",
};

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0,
        }}
      >
        {/* 💎 NAVBAR */}
        <Navbar />

        {/* 💎 MAIN CONTENT */}
        <main
          style={{
            flex: 1,
            width: "100%",
            paddingBottom: "80px", // 👈 space for mobile interactions
          }}
        >
          {children}
        </main>

        {/* 💎 FOOTER */}
        <Footer />
      </body>
    </html>
  );
}