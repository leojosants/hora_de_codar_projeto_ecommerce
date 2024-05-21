import { useState } from "react";

const Product = (props) => {
    const { product, onAddToCart } = props;
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="c-product">
            <img
                src={product.image}
                alt={product.name}
            />

            <h3>
                {product.name}
            </h3>

            <p>
                ${product.price}
            </p>

            <div className="c-cart-buttons">
                <select onChange={
                    (event) => setQuantity(parseInt(event.target.value))
                }>
                    {
                        [...Array(10).keys()].map(
                            (x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            )
                        )
                    }
                </select>

                <button onClick={() => onAddToCart(product, quantity)}>
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    );
};

export default Product;