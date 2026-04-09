"use client";

import { useEffect, useState } from "react";

export default function Panier() {
  const [cart, setCart] = useState([]);

  // Load cart
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  // Save cart
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Remove item
  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    updateCart(newCart);
  };

  // Increase quantity
  const increaseQty = (index) => {
    const newCart = [...cart];
    newCart[index].qty = (newCart[index].qty || 1) + 1;
    updateCart(newCart);
  };

  // Decrease quantity
  const decreaseQty = (index) => {
    const newCart = [...cart];
    if ((newCart[index].qty || 1) > 1) {
      newCart[index].qty -= 1;
      updateCart(newCart);
    }
  };

  // Total
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  // WhatsApp message
  const message = encodeURIComponent(
    "Bonjour,\n\nJe souhaite commander :\n\n" +
      cart
        .map(
          (item) =>
            `${item.name} x${item.qty || 1} - ${
              item.price * (item.qty || 1)
            } CFA`
        )
        .join("\n") +
      `\n\nTotal: ${total} CFA\n\nMerci.`
  );

  return (
    <div className="container">

      {/* 💎 HEADER */}
      <h1 style={{ marginBottom: "40px" }}>
        Votre panier
      </h1>

      {/* 💎 EMPTY */}
      {cart.length === 0 && (
        <p style={{ color: "var(--muted)" }}>
          Votre panier est vide.
        </p>
      )}

      {/* 💎 ITEMS */}
      <div style={{ display: "grid", gap: "20px" }}>
        {cart.map((item, index) => (
          <div
            key={index}
            className="card"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "16px",
              gap: "16px",
            }}
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "var(--radius-sm)",
              }}
            />

            {/* INFO */}
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: "15px" }}>
                {item.name}
              </h3>

              <p style={{ color: "var(--muted)", fontSize: "14px" }}>
                {item.price} CFA
              </p>

              {/* 💎 QUANTITY */}
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <button
                  onClick={() => decreaseQty(index)}
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border)",
                    background: "var(--card)",
                    cursor: "pointer",
                  }}
                >
                  −
                </button>

                <span>{item.qty || 1}</span>

                <button
                  onClick={() => increaseQty(index)}
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border)",
                    background: "var(--card)",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* REMOVE */}
            <button
              onClick={() => removeItem(index)}
              style={{
                fontSize: "18px",
                background: "none",
                color: "var(--danger)",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* 💎 TOTAL + CTA */}
      {cart.length > 0 && (
        <div
          style={{
            marginTop: "50px",
            padding: "20px",
            borderRadius: "var(--radius-md)",
            background: "var(--card)",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>
            Total: {total} CFA
          </h2>

          <p style={{ color: "var(--muted)", fontSize: "14px" }}>
            Livraison rapide disponible
          </p>

          <a
            href={`https://wa.me/2250798512341?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="btn-whatsapp"
              style={{ marginTop: "20px" }}
            >
              Commander via WhatsApp
            </button>
          </a>
        </div>
      )}
    </div>
  );
}