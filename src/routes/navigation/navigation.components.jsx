import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation.styles";

const Navigation = () => {
  const { currentUser,setCurrentUser } = useContext(UserContext);

  const resetUser = () => {
    signOutUser().then(setCurrentUser(null));
  }

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
            <NavLink as='span' onClick={resetUser}>SIGN-OUT</NavLink> 
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