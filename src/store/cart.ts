import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  name: string;
  id: string;
  price: number;
  image: string;
  quantity: number;
  weight: number;
  roast: string;
};

type AddProductProps = {
  name: string;
  id: string;
  price: number;
  image: string;
  weight: number;
  roast: string;
};

type CartStore = {
  products: CartItem[];
  addProduct: (product: AddProductProps) => void;
  removeProduct: (product: CartItem) => void;
  increaseQuantity: (product: CartItem) => void;
  decreaseQuantity: (product: CartItem) => void;
};

const useCartStore = create<CartStore>()(
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
            products: [...state.products, { ...newProduct, quantity: 1 }],
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
              ? {
                  ...product,
                  quantity: product.quantity + 1,
                }
              : product,
          ),
        })),

      decreaseQuantity: (productInfo) =>
        set((state) => ({
          products: state.products
            .map((product) =>
              product.id === productInfo.id
                ? {
                    ...product,
                    quantity: product.quantity - 1,
                  }
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

export default useCartStore;
