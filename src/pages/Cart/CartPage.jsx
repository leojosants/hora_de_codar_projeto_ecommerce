import CartItem from "../../components/CartItem/CartItemComponent.jsx";
import CheckoutButton from "../../components/CheckoutButton/CheckoutButtonComponent.jsx";
import { calculateTotalPrice } from "../../usefulFunctions/utils.js";

const Cart = (props) => {
    const { cartItems, onUpdateCart, onRemoveFromCart, setCartItems } = props;
    const totalPrice = calculateTotalPrice(cartItems);

    return (
        <div>
            <h1>
                Carrinho
            </h1>

            {
                cartItems.length === 0 ? (
                    <p>Não há itens no carrinho.</p>
                ) : (
                    <>
                        {
                            cartItems.map(
                                (item) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        onUpdateCart={onUpdateCart}
                                        onRemoveFromCart={onRemoveFromCart}
                                    />
                                )
                            )
                        }

                        <div className="c-total">
                            <p>
                                Total: ${totalPrice.toFixed(2)}
                            </p>

                            <CheckoutButton
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                            />
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Cart;