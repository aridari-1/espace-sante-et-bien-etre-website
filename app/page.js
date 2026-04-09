import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function Home() {
  return (
    <div className="container">

      {/* 💎 HERO SECTION */}
      <section
        style={{
          marginTop: "60px",
          marginBottom: "80px",
          textAlign: "center",
          padding: "40px 20px",
          background: "var(--card)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: "500",
            marginBottom: "12px",
            letterSpacing: "-0.5px",
          }}
        >
          Révélez votre beauté naturelle
        </h1>

        <p
          style={{
            color: "var(--muted)",
            fontSize: "15px",
            maxWidth: "520px",
            margin: "auto",
            lineHeight: "1.6",
          }}
        >
          Découvrez notre sélection de produits cosmétiques et bien-être haut de gamme,
          conçus pour sublimer votre peau avec élégance et efficacité.
        </p>
      </section>

      {/* 💎 SECTION HEADER */}
      <div
        style={{
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontWeight: "500",
            letterSpacing: "-0.3px",
          }}
        >
          Nos produits
        </h2>
      </div>

      {/* 💎 PRODUCT GRID */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "32px",
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>

    </div>
  );
}