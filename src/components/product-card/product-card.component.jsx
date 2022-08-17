import './product-card.styles.jsx'
import { Button } from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { ProductContainer, ProductFooter, ProductImage } from './product-card.styles.jsx';

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProduct = () => { addItemToCart(product) }

    return (
        <ProductContainer >
            <ProductImage src={imageUrl} alt={name} />
            <ProductFooter>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </ProductFooter>
            <Button onClick={addProduct} buttonType="inverted">Add to Cart</Button>
        </ProductContainer>
    )
}

export default ProductCard;