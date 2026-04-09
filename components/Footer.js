"use client";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "80px",
        padding: "50px 20px",
        borderTop: "1px solid var(--border)",
        background: "var(--card)",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "14px",
          fontWeight: "600",
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        ESPACE SANTÉ ET BIEN ÊTRE
      </h2>

      <p
        style={{
          color: "var(--muted)",
          fontSize: "14px",
          maxWidth: "400px",
          margin: "0 auto 25px auto",
          lineHeight: "1.6",
        }}
      >
        Produits cosmétiques et bien-être de haute qualité, pensés pour révéler votre beauté naturelle.
      </p>

      {/* CONTACT BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <a href="https://wa.me/2250798512341" target="_blank">
          <button className="btn-whatsapp">WhatsApp 1</button>
        </a>

        <a href="https://wa.me/2250798605711" target="_blank">
          <button className="btn-whatsapp">WhatsApp 2</button>
        </a>
      </div>

      <p
        style={{
          fontSize: "12px",
          color: "var(--muted)",
        }}
      >
        © {new Date().getFullYear()} Espace Santé et Bien Être
      </p>
    </footer>
  );
}