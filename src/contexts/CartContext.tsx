import { createContext } from "react";
import type { ProductCart } from "./CartProvider";
import type { Product } from "../pages/_app/products/category/product";

interface CartContextType {
	cart: ProductCart[];
	addToCart: (product: Product) => void;
	removeFromCart: (productId: number) => void;
	incrementInCart: (product: ProductCart) => void;
	decrementInCart: (product: ProductCart) => void;
}

export const CartContext = createContext({} as CartContextType);
