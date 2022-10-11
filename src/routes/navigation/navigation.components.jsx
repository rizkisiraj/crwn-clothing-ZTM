import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation.styles";
import { useSelector } from "react-redux";
import { userSelector } from "../../stores/user/user.selector";

const Navigation = () => {
  const currentUser = useSelector(userSelector);
    return (
      <Fragment>
        <NavigationContainer as='nav'>
          <LogoContainer to='/'>
            <CrwnLogo className="logo" />
          </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>
            SHOP
            </NavLink>
            {currentUser ? 
            <NavLink as='span' onClick={signOutUser}>SIGN-OUT</NavLink> 
            :
            <NavLink to='/auth'>
            SIGN IN
            </NavLink>   

            }
            <CartIcon />
          </NavLinks>
          <CartDropdown />
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;