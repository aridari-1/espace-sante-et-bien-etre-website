"use client";

import { useState } from "react";
import CartDrawer from "./CartDrawer";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 18px",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* 💎 LOGO */}
        <Link
          href="/"
          style={{
            fontWeight: "600",
            letterSpacing: "1px",
            fontSize: "14px",
            textTransform: "uppercase",
          }}
        >
          ESPACE SANTÉ ET BIEN ÊTRE
        </Link>

        {/* 💎 ACTIONS */}
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: "8px 12px",
            borderRadius: "var(--radius-sm)",
            background: "var(--card)",
            border: "1px solid var(--border)",
            cursor: "pointer",
            fontSize: "14px",
            transition: "var(--transition)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--gold-light)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--card)";
          }}
        >
          🛒 Panier
        </button>
      </header>

      {/* 💎 CART DRAWER */}
      <CartDrawer isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}