"use client";

import Link from "next/link";
import { addToCart } from "@/lib/cart";

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div
      className="card"
      style={{
        cursor: "pointer",
        overflow: "hidden",
        borderRadius: "var(--radius-lg)",
        transition: "var(--transition)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "var(--shadow-medium)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-soft)";
      }}
    >
      {/* 💎 IMAGE */}
      <Link href={`/produit/${product.id}`}>
        <div style={{ overflow: "hidden" }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "clamp(220px, 30vw, 300px)",
              objectFit: "cover",
              transition: "transform 0.5s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </div>
      </Link>

      {/* 💎 CONTENT */}
      <div style={{ padding: "18px" }}>
        <h3
          style={{
            fontSize: "16px",
            fontWeight: "500",
            marginBottom: "6px",
            letterSpacing: "-0.2px",
          }}
        >
          {product.name}
        </h3>

        <p
          style={{
            color: "var(--muted)",
            fontSize: "14px",
            marginBottom: "14px",
          }}
        >
          {product.price} CFA
        </p>

        {/* 💎 BUTTON */}
        <button
          onClick={() => addToCart(product)}
          className="btn-primary"
          style={{
            fontSize: "14px",
            padding: "12px",
          }}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}