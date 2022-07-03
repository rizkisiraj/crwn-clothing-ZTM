import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen,setIsCartOpen, cartItems } = useContext(CartContext);
    const totalProducts = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

    return (
        <div className='cart-icon-container' onClick={() => setIsCartOpen(!isCartOpen)}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{totalProducts}</span>
        </div>
    )

}

export default CartIcon;