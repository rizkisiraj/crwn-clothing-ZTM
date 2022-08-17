import styled from 'styled-components';
import { InvertedButton, BaseButton, GoogleSignInButton } from '../button/button.styles'

export const ProductImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`

export const ProductFooter = styled.div`
width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;

.name {
  width: 90%;
  margin-bottom: 15px;
}

.price {
  width: 10%;
}
`

export const ProductContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;

${BaseButton},
${InvertedButton},
${GoogleSignInButton} {
  width: 60%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
}

&:hover {
  ${ProductImage} {
    opacity: 0.8;
  }

  ${BaseButton},
  ${InvertedButton},
  ${GoogleSignInButton} {
    opacity: 0.85;
    display: flex;
  }
}
`

// .product-card-container {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     height: 350px;
//     align-items: center;
//     position: relative;
  
//     img {
      
//     }
  
//     button {
//       width: 80%;
//       opacity: 0.7;
//       position: absolute;
//       top: 255px;
//       display: none;
//     }
  
//     &:hover {
//       img {
//         opacity: 0.8;
//       }
  
//       button {
//         opacity: 0.85;
//         display: flex;
//       }
//     }
  
//     .footer {
//       width: 100%;
//       height: 5%;
//       display: flex;
//       justify-content: space-between;
//       font-size: 18px;
  
//       .name {
//         width: 90%;
//         margin-bottom: 15px;
//       }
  
//       .price {
//         width: 10%;
//       }
//     }
//   }
  