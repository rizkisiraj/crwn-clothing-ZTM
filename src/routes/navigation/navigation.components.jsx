import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import './navigation.styles.scss';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser,setCurrentUser } = useContext(UserContext);

  const resetUser = () => {
    signOutUser().then(setCurrentUser(null));
  }

    return (
      <Fragment>
        <nav className="navigation">
          <Link className="logo-container" to='/'>
            <CrwnLogo className="logo" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
            SHOP
            </Link>
            {currentUser ? 
            <span className="nav-link" onClick={resetUser}>SIGN-OUT</span> 
            :
            <Link className="nav-link" to='/auth'>
            SIGN IN
            </Link>   

            }
            <CartIcon />
          </div>
          <CartDropdown />
        </nav>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;