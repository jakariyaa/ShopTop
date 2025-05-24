import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import { X } from "lucide-react";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem(props: CartItemProps) {
  const { setItemQuantity, removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === props.id);
  if (item == null) return null;
  return (
    <div className="flex items-center bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-2">
      <img
        className="w-20 h-20 rounded-lg object-cover mr-4 border border-gray-100"
        src={item.image}
        alt={item.name}
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          <div className="flex items-center mt-1">
            <span className="text-blue-700 font-bold">
              {formatCurrency(item.price)}
            </span>
            <span className="text-gray-500 text-sm ml-3">
              x {props.quantity}
            </span>
          </div>
        </div>
        <div className="flex items-center mt-3">
          <input
            className="w-14 text-center border border-gray-300 rounded px-2 py-1 mr-2 focus:outline-blue-400"
            type="number"
            min={1}
            value={props.quantity}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (isNaN(value) || value < 1) {
                return;
              }
              setItemQuantity(item.id, value);
            }}
          />
          <button
            className="border border-red-400 text-red-500 hover:bg-red-50 p-2 rounded transition-colors cursor-pointer"
            onClick={() => removeFromCart(item.id)}
            aria-label="Remove item"
          >
            <X size={18} />
          </button>
          <span className="ml-auto text-base font-semibold text-gray-700">
            {formatCurrency(item.price * props.quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}
