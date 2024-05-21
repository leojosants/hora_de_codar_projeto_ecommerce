import { useLocation, useNavigate } from "react-router-dom";
import { calculateTotalPrice } from "../../usefulFunctions/utils.js";
import { toast } from "react-toastify";

const ThankYou = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const items = location.state.cartItems;
    const totalPrice = calculateTotalPrice(items);

    const redirectToHome = () => {
        toast.success('Redirecioando para página de catálogos...');

        setTimeout(() => {
            navigate('/');
        }, 4000);
    };

    return (
        <div className="c-thank-you-page">
            <h1>
                Produto(s) Comprado(s)
            </h1>

            <ul>
                {
                    items.map(
                        (item) => (
                            <div key={item.id} className="c-links">
                                <li >
                                    {item.name}: <span>  ${item.price} ({item.quantity}un) </span>
                                </li>
                            </div>
                        )
                    )
                }
            </ul>

            <p>
                Total: ${totalPrice.toFixed(2)}
            </p>

            <button onClick={redirectToHome}>
                Voltar ao catálogo
            </button>
        </div>
    );
};

export default ThankYou;