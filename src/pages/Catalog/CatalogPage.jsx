import productsData from '../../data/products_mock.json';
import Product from '../../components/Product/ProductComponent.jsx';

const Catalog = (props) => {
    const { onAddToCart } = props;

    const scrollFN = () => {
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth',
            }
        )
    };


    return (
        <div>
            <h1>
                Catálogo de Produtos
            </h1>

            <div className='c-product-container'>
                {
                    productsData.map(
                        (product) => (
                            <Product
                                key={product.id}
                                product={product}
                                onAddToCart={onAddToCart}
                            />
                        )
                    )
                }
            </div>

            <button className='c-botton-scroll' onClick={scrollFN}>
                &uarr;
            </button>
        </div>
    );
};

export default Catalog;