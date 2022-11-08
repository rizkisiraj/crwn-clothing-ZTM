import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems, selectIsCartOpen } from '../../stores/cart/cart.selector';
import { Button } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer,CartItems,EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {

  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen)
    let navigate = useNavigate();
    const goToCheckoutHandler = () => {
      navigate('/checkout');
    };

    return (
      !isCartOpen ? null : (

      <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
      )
    )
}

export default CartDropdown;