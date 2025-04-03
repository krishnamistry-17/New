import { createContext, useState, useEffect, useContext } from "react";

import product1 from "../../../../assets/images/product1.png";
import product2 from "../../../../assets/images/product2.png";
import product3 from "../../../../assets/images/product3.png";
import product4 from "../../../../assets/images/product4.png";
import product5 from "../../../../assets/images/product5.png";
import product6 from "../../../../assets/images/product6.png";
import product7 from "../../../../assets/images/product7.png";
import product8 from "../../../../assets/images/product8.png";

const data = [
  {
    id: 1,
    image: product1,
    heading: "Syltherine",
    subheading: "Stylish Cafe Chair",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "-30%",
    discountFlag: true,
  },
  {
    id: 2,
    image: product2,
    heading: "Leviosa",
    subheading: "Stylish cafe chair",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.300.000",
    discount: "Rp.500.000",
  },
  {
    id: 3,
    image: product3,
    heading: "Lolito",
    subheading: "Luxury big sofa",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.700.000",
    discount: "Rp.900.000",
    tag: "-50%",
    discountFlag: true,
  },
  {
    id: 4,
    image: product4,
    heading: "Respira",
    subheading: "Bar table and stool",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
    discountFlag: false,
  },
  {
    id: 5,
    image: product5,
    heading: "Grifo",
    subheading: "Night lamp",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.800.000",
  },
  {
    id: 6,
    image: product6,
    heading: "Muggo",
    subheading: "lgall mug",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
    discountFlag: false,
  },
  {
    id: 7,
    image: product7,
    heading: "Pingky",
    subheading: "Cute bed set",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "700.000",
    discount: "Rp.900.000",
    tag: "-50%",
    discountFlag: true,
  },
  {
    id: 8,
    image: product8,
    heading: "Potty",
    subheading: "Minimalist flower pot",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
    discountFlag: false,
  },
  {
    id: 9,
    image: product8,
    heading: "Potty",
    subheading: "Minimalist flower pot",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
    discountFlag: false,
  },
  {
    id: 10,
    image: product6,
    heading: "Muggo",
    subheading: "Small mug",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
    discountFlag: false,
  },
  {
    id: 11,
    image: product4,
    heading: "Respira",
    subheading: "Bar table and stool",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
    discountFlag: false,
  },
  {
    id: 12,
    image: product2,
    heading: "Leviosa",
    subheading: "Stylish cafe chair",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.300.000",
    discount: "Rp.500.000",
  },
  {
    id: 13,
    image: product1,
    heading: "Syltherine",
    subheading: "Stylish Cafe Chair",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "-30%",
    discountFlag: true,
  },
  {
    id: 14,
    image: product5,
    heading: "Grifo",
    subheading: "Night lamp",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.800.000",
  },
  {
    id: 15,
    image: product3,
    heading: "Lolito",
    subheading: "Luxury big sofa",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.700.000",
    discount: "Rp.900.000",
    tag: "-50%",
    discountFlag: true,
  },
  {
    id: 16,
    image: product7,
    heading: "Pingky",
    subheading: "Cute bed set",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "700.000",
    discount: "Rp.900.000",
    tag: "-50%",
    discountFlag: true,
  },
  {
    id: 17,
    image: product8,
    heading: "Potty",
    subheading: "Minimalist flower pot",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
    discountFlag: false,
  },
  {
    id: 18,
    image: product6,
    heading: "Muggo",
    subheading: "Small mug",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
    discountFlag: false,
  },
  {
    id: 19,
    image: product4,
    heading: "Respira",
    subheading: "Bar table and stool",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
    discountFlag: false,
  },
  {
    id: 20,
    image: product2,
    heading: "Leviosa",
    subheading: "Stylish cafe chair",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.300.000",
    discount: "Rp.500.000",
  },
  {
    id: 21,
    image: product1,
    heading: "Syltherine",
    subheading: "Stylish Cafe Chair",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "-30%",
    discountFlag: true,
  },
  {
    id: 22,
    image: product5,
    heading: "Grifo",
    subheading: "Night lamp",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.800.000",
  },
  {
    id: 23,
    image: product3,
    heading: "Lolito",
    subheading: "Luxury big sofa",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.700.000",
    discount: "Rp.900.000",
    tag: "-50%",
    discountFlag: true,
  },
  {
    id: 24,
    image: product7,
    heading: "Pingky",
    subheading: "Cute bed set",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "700.000",
    discount: "Rp.900.000",
    tag: "-50%",
    discountFlag: true,
  },
  {
    id: 25,
    image: product1,
    heading: "Syltherine",
    subheading: "Stylish Cafe Chair",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "-30%",
    discountFlag: true,
  },
  {
    id: 26,
    image: product2,
    heading: "Leviosa",
    subheading: "Stylish cafe chair",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.300.000",
    discount: "Rp.500.000",
  },
  {
    id: 27,
    image: product3,
    heading: "Lolito",
    subheading: "Luxury big sofa",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.700.000",
    discount: "Rp.900.000",
    tag: "-50%",
    discountFlag: true,
  },
  {
    id: 28,
    image: product4,
    heading: "Respira",
    subheading: "Bar table and stool",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
    discountFlag: false,
  },
  {
    id: 29,
    image: product5,
    heading: "Grifo",
    subheading: "Night lamp",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.800.000",
  },
  {
    id: 30,
    image: product6,
    heading: "Muggo",
    subheading: "Small mug",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
    discountFlag: false,
  },
  {
    id: 31,
    image: product7,
    heading: "Pingky",
    subheading: "Cute bed set",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "700.000",
    discount: "Rp.900.000",
    tag: "-50%",
    discountFlag: true,
  },
  {
    id: 32,
    image: product8,
    heading: "Potty",
    subheading: "Minimalist flower pot",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
    discountFlag: false,
  },
  {
    id: 33,
    image: product1,
    heading: "Syltherine",
    subheading: "Stylish Cafe Chair",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "-30%",
    discountFlag: true,
  },
  {
    id: 34,
    image: product2,
    heading: "Leviosa",
    subheading: "Stylish cafe chair",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.300.000",
    discount: "Rp.500.000",
  },
  {
    id: 35,
    image: product3,
    heading: "Lolito",
    subheading: "Luxury big sofa",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.700.000",
    discount: "Rp.900.000",
    tag: "-50%",
    discountFlag: true,
  },
  {
    id: 36,
    image: product4,
    heading: "Respira",
    subheading: "Bar table and stool",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
    discountFlag: false,
  },
  {
    id: 37,
    image: product5,
    heading: "Grifo",
    subheading: "Night lamp",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.800.000",
  },
  {
    id: 38,
    image: product6,
    heading: "Muggo",
    subheading: "Small mug",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
    discountFlag: false,
  },
  {
    id: 39,
    image: product7,
    heading: "Pingky",
    subheading: "Cute bed set",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "700.000",
    discount: "Rp.900.000",
    tag: "-50%",
    discountFlag: true,
  },
  {
    id: 40,
    image: product8,
    heading: "Potty",
    subheading: "Minimalist flower pot",
    para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
    discountFlag: false,
  },
];

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.error("Failed to parse cartItems from localStorage:", e);
      return [];
    }
  });
  console.log("cartItems*** :", cartItems);

  const [state, setState] = useState({
    data: data,
    cart: [],
  });


  const updateItemQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart && isItemInCart.quantity === 1) {
      setCartItems((prevItems) =>
        prevItems.filter((cartItem) => cartItem.id !== item.id)
      );
    } else {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        state: state,
        cartItems,
        updateItemQuantity,
        addToCart,
        removeFromCart,
        removeItem,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
