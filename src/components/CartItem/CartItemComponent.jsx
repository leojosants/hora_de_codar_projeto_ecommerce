const CartItem = (props) => {
    const { item, onUpdateCart, onRemoveFromCart } = props;

    return (
        <div className="c-cart-item">
            <h3>
                {item.name}
            </h3>

            <p>
                ${item.price}
            </p>

            <div className="c-cart-buttons">
                <input
                    type="number"
                    value={item.quantity}
                    onChange={
                        (event) => onUpdateCart(
                            item, parseInt(event.target.value)
                        )
                    }
                />

                <button onClick={() => onRemoveFromCart(item)}>
                    Remover
                </button>
            </div>
        </div>
    );
};

export default CartItem;