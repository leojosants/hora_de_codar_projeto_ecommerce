import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutButton = (props) => {
    const { cartItems, setCartItems } = props;
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (cartItems.length > 0) {
            const confirmFinish = confirm('Confirma finalizar compra?');

            if (!confirmFinish) {
                toast.info('Compra não finalizada!');
                return;
            }

            toast.success('Compra finalizada com sucesso!');

            setTimeout(
                () => {
                    navigate(
                        '/thank-you',
                        { state: { cartItems } }
                    );
                    setCartItems([]);
                }, 2000
            );

        }
        else {
            toast.error('Seu carrinho está vazio!');
        }
    };

    return (
        <button onClick={handleCheckout}>
            Finalizar Compra
        </button>
    );
};

export default CheckoutButton;