export const calculateCart = (cart = []) => {
  const totalAmount = cart.reduce(
    (sum, item) =>
      sum + (Number(item.price) || 0) * (Number(item.quantity) || 0),
    0
  );

  const totalItems = cart.reduce(
    (n, item) => n + (Number(item.quantity) || 0),
    0
  );

  return { totalAmount, totalItems, grandTotal: totalAmount };
};

// export const calculateCart = (cart = []) => {
//   const totalAmount = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   const cartItems = cart.length;
//   return {
//     totalAmount,
//     cartItems,
//     items: cart,
//   };
// };
