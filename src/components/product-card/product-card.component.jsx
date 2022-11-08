import './product-card.styles.jsx'
import { Button } from '../button/button.component';
import { useSelector,useDispatch } from 'react-redux';
import { selectCartItems } from '../../stores/cart/cart.selector.js';
import { addItemToCart } from '../../stores/cart/cart.action.js';
import { ProductContainer, ProductFooter, ProductImage } from './product-card.styles.jsx';

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductContainer >
            <ProductImage src={imageUrl} alt={name} />
            <ProductFooter>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </ProductFooter>
            <Button onClick={addProductToCart} buttonType="inverted">Add to Cart</Button>
        </ProductContainer>
    )
}

export default ProductCard;