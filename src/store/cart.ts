import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  name: string;
  id: string;
  price: string;
  image: string;
  quantity: number;
};

type cartStore = {
  products: CartItem[];
  addProduct: (product: CartItem) => void;
  removeProduct: (product: CartItem) => void;
  increaseQuantity: (product: CartItem) => void;
  decreaseQuantity: (product: CartItem) => void;
};

const useCartStore = create<cartStore>()(
  persist(
    (set) => ({
      products: [],

      addProduct: (newProduct) =>
        set((state) => {
          const existingProduct = state.products.find(
            (product) => product.id === newProduct.id,
          );

          if (existingProduct) {
            return {
              products: state.products.map((product) =>
                product.id === newProduct.id
                  ? {
                      ...product,
                      quantity: product.quantity + 1,
                    }
                  : product,
              ),
            };
          }

          return {
            products: [...state.products, newProduct],
          };
        }),

      removeProduct: (productInfo) =>
        set((state) => ({
          products: state.products.filter(
            (product) => product.id !== productInfo.id,
          ),
        })),

      increaseQuantity: (productInfo) =>
        set((state) => ({
          products: state.products.map((product) =>
            product.id === productInfo.id
              ? { ...product, quantity: product.quantity + 1 }
              : product,
          ),
        })),

      decreaseQuantity: (productInfo) =>
        set((state) => ({
          products: state.products
            .map((product) =>
              product.id === productInfo.id
                ? { ...product, quantity: product.quantity - 1 }
                : product,
            )
            .filter((product) => product.quantity > 0),
        })),
    }),
    {
      name: "cart-storage",
    },
  ),
);

const getTotalPrice = ()=>{
    const products = useCartStore
}

export default useCartStore;
