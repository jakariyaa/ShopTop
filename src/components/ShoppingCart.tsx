import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";
import { X } from "lucide-react";

export function ShoppingCart() {
  const { isOpen, closeCart, cartItems } = useShoppingCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-500 ${
          isOpen
            ? "bg-black/40 backdrop-blur-sm opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-2xl z-50 transform transition-transform duration-500 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <h2 className="text-2xl font-bold tracking-tight text-blue-700">
            Cart
          </h2>
          <button
            className="text-gray-400 hover:text-red-500 text-3xl cursor-pointer"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <X />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-2 py-4 bg-gray-50">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 text-lg">
              Your cart is empty
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
        <div className="border-t border-gray-200 px-6 py-4 bg-white">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-medium text-gray-500">Total</span>
            <span className="text-2xl font-bold text-blue-700">
              {formatCurrency(
                cartItems.reduce((total, item) => {
                  const storeItem = storeItems.find((i) => i.id === item.id);
                  return total + (storeItem?.price ?? 0) * item.quantity;
                }, 0)
              )}
            </span>
          </div>
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-2 rounded-lg transition-colors cursor-pointer"
            onClick={closeCart}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
