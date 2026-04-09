export function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // 🔍 Check if product already exists
  const existingIndex = cart.findIndex((item) => item.id === product.id);

  if (existingIndex !== -1) {
    // ✅ Increase quantity
    cart[existingIndex].qty =
      (cart[existingIndex].qty || 1) + 1;
  } else {
    // ✅ Add new product with qty
    cart.push({
      ...product,
      qty: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}