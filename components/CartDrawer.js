"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartDrawer({ isOpen, onClose }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* 💎 OVERLAY */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.25)",
          zIndex: 999,
        }}
      />

      {/* 💎 DRAWER */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "min(380px, 100%)",
          height: "100%",
          background: "#ffffff", // ✅ FORCE WHITE
          borderLeft: "1px solid var(--border)",
          boxShadow: "var(--shadow-medium)",
          padding: "20px",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* 💎 HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ fontWeight: "500" }}>Panier</h2>

          <button
            onClick={onClose}
            style={{
              fontSize: "18px",
              background: "none",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        {/* 💎 ITEMS */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          {cart.length === 0 && (
            <p style={{ color: "var(--muted)" }}>
              Votre panier est vide
            </p>
          )}

          {cart.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "var(--radius-sm)",
                }}
              />

              <div>
                <p style={{ margin: 0 }}>{item.name}</p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "13px",
                    color: "var(--muted)",
                  }}
                >
                  {item.price} CFA
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 💎 ACTIONS */}
        <div style={{ marginTop: "20px" }}>
          <Link href="/panier">
            <button
              className="btn-primary"
              onClick={onClose} // ✅ CLOSE DRAWER ON CLICK
            >
              Voir le panier
            </button>
          </Link>

          <button
            onClick={onClose}
            style={{
              marginTop: "10px",
              width: "100%",
              padding: "12px",
              background: "#ffffff",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              transition: "var(--transition)",
            }}
          >
            Continuer les achats
          </button>
        </div>
      </div>
    </>
  );
}