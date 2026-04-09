"use client";

import { useParams } from "next/navigation";
import { products } from "@/lib/data";
import { addToCart } from "@/lib/cart";

export default function ProductPage() {
  const { id } = useParams();

  const product = products.find((p) => p.id == id);

  if (!product) {
    return (
      <div className="container">
        <p>Produit introuvable</p>
      </div>
    );
  }

  // 💎 WhatsApp message
  const message = encodeURIComponent(
    `Bonjour,\n\nJe souhaite commander :\n\n${product.name}\n\nMerci.`
  );

  return (
    <div className="container">

      {/* 💎 PRODUCT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "50px",
          marginTop: "50px",
          alignItems: "start",
        }}
      >
        {/* 💎 IMAGE */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              borderRadius: "var(--radius-lg)",
              objectFit: "cover",
              boxShadow: "var(--shadow-soft)",
            }}
          />
        </div>

        {/* 💎 INFO */}
        <div>
          <h1
            style={{
              fontSize: "clamp(26px, 5vw, 36px)",
              fontWeight: "500",
              marginBottom: "10px",
            }}
          >
            {product.name}
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "var(--muted)",
              marginBottom: "20px",
            }}
          >
            {product.price} CFA
          </p>

          {/* 💎 DESCRIPTION */}
          <p
            style={{
              lineHeight: "1.7",
              color: "var(--muted)",
              fontSize: "15px",
              marginBottom: "30px",
            }}
          >
            {product.description}
          </p>

          {/* 💎 ACTIONS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <button
              onClick={() => addToCart(product)}
              className="btn-primary"
            >
              Ajouter au panier
            </button>

            <a
              href={`https://wa.me/2250798512341?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-whatsapp">
                Commander via WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}