import { createContext, useState } from "react";
import PRODUCTS_DATA from '../shop-data.json'


export const ProductsContext = createContext({
    products: []
})

export const ProductsProviderContext = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS_DATA);
    const value = { products };

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}