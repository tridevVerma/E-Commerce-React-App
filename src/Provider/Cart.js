import { useState, createContext, useContext, useEffect } from "react";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const initialCart = () => {
    const cartItems = localStorage.getItem("cartItems");
    return cartItems ? JSON.parse(cartItems) : [];
  };

  const [products, setProducts] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(products));
  }, [products]);

  const add = (product) => {
    const productExist = products.find((prod) => {
      return prod.id === product.id;
    });
    if (productExist) {
      console.log("increase count !!");
      return;
    }
    setProducts([...products, product]);
  };

  const remove = (id) => {
    setProducts(products.filter((prod) => prod.id !== id));
  };

  const checkProductExists = (id) => {
    if (products.find((prod) => prod.id === id)) {
      return true;
    }
    return false;
  };

  return (
    <CartContext.Provider value={{ products, add, remove, checkProductExists }}>
      {children}
    </CartContext.Provider>
  );
}

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
