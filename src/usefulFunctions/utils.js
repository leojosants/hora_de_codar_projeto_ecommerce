export const calculateTotalPrice = (cartItems) => {
    const total = cartItems.reduce(
        (total, item) => total + item.price * item.quantity, 0
    )
    return total;
}