import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import Catalog from './pages/Catalog/CatalogPage.jsx';
import Cart from './pages/Cart/CartPage.jsx';
import ThankYou from './pages/ThankYou/ThankYouPage.jsx';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddCart = (product, quantity) => {
    setCartItems(
      (prevItems) => {
        const itemExists = prevItems.find(
          (item) => item.id === product.id
        );

        if (itemExists) {
          toast.info(`Quantidade do ítem '${product.name}' atualizada!`);
          return prevItems.map(
            (item) => item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }
        else {
          toast.success(`'${product.name}' adicionado ao carrinho!`);
          return [
            ...prevItems,
            { ...product, quantity }
          ];
        }
      }
    );
  };

  const handleUpdateCart = (product, quantity) => {
    setCartItems(
      (prevItems) => {
        toast.info(`Quantidade do ítem '${product.name}' atualizada!`);
        return prevItems.map(
          (item) => item.id === product.id ? (
            { ...item, quantity: +quantity }
          ) : (
            item
          )
        )
      }
    );
  };

  const handleRemoveFromCart = (product) => {
    const confirmRemoval = confirm(`Realmente deseja remover '${product.name}' do carrinho?`);

    if (!confirmRemoval) {
      toast.info(`Remoção do produto '${product.name}' cancelada!`);
      return;
    }

    toast.error(`'${product.name}' foi removido com sucesso!`);

    setCartItems(
      (prevItems) => prevItems.filter(
        (item) => item.id !== product.id,
      )
    );
  };

  const handleOnCheckout = () => {
    if (cartItems.length > 0) {
      const confirmFinish = confirm('Confirma finalizar compra?');

      if (!confirmFinish) {
        toast.info('Compra não finalizada!');
        return;
      }

      toast.success('Compra finalizada com sucesso!');
      setCartItems([]);
    }
    else {
      toast.error('Seu carrinho está vazio!');
    }
  };

  return (
    <BrowserRouter>
      <nav className='c-nav'>
        <Link to={'/'}>Catálogo</Link>
        <Link to={'/cart'}>Carrinho</Link>
      </nav>

      <div className="c-container">
        <Routes>
          <Route
            path={'/'}
            element={<Catalog onAddToCart={handleAddCart} />}
          />

          <Route
            path={'/cart'}
            element={
              <Cart
                cartItems={cartItems}
                onUpdateCart={handleUpdateCart}
                onRemoveFromCart={handleRemoveFromCart}
                setCartItems={setCartItems}
                onCheckout={handleOnCheckout}
              />
            }
          />

          <Route
            path={'/thank-you'}
            element={<ThankYou />}
          />
        </Routes>
      </div>

      <ToastContainer
        position={'top-right'}
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;