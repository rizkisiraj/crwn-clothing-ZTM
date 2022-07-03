import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import { Button } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {

    const { isCartOpen, cartItems } = useContext(CartContext);
    let navigate = useNavigate();
    const goToCheckoutHandler = () => {
      navigate('/checkout');
    };

    return (
        <div className={isCartOpen ? 'cart-dropdown-container' : 'none' }>
            <div className="cart-items">
                {
                    cartItems.length ? (
                        cartItems.map((cartItem) => (
                          <CartItem key={cartItem.id} cartItem={cartItem} />
                        ))
                      ) : (
                        <span className='empty-message'>Your cart is empty</span>
                      )
                }
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECK</Button>
        </div>
    )
}

export default CartDropdown;