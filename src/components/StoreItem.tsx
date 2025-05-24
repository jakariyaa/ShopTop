import { formatCurrency } from "../utilities/formatCurrency";
import { Minus, Plus } from "lucide-react";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export function StoreItem({ id, name, price, image }: StoreItemProps) {
  const {
    getItemQuantity,
    setItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 flex flex-col transition hover:shadow-lg">
      <img
        className="w-full h-48 object-cover rounded-xl mb-4 border border-gray-100"
        src={image}
        alt={name}
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
          <p className="text-blue-700 font-bold text-base mb-2">
            {formatCurrency(price)}
          </p>
        </div>
        <div>
          {quantity > 0 ? (
            <div className="flex items-center gap-2 mt-2">
              <button
                className="bg-blue-100 text-blue-600 hover:bg-blue-200 p-2 rounded-lg transition"
                onClick={() => decreaseCartQuantity(id)}
                aria-label="Decrease quantity"
              >
                <Minus size={18} />
              </button>
              <input
                className="w-14 text-center border border-gray-300 rounded px-2 py-1 focus:outline-blue-400"
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (isNaN(value) || value < 1) return;
                  setItemQuantity(id, value);
                }}
              />
              <button
                className="bg-blue-100 text-blue-600 hover:bg-blue-200 p-2 rounded-lg transition"
                onClick={() => increaseCartQuantity(id)}
                aria-label="Increase quantity"
              >
                <Plus size={18} />
              </button>
              <span className="ml-auto text-sm text-gray-500">In Cart</span>
            </div>
          ) : (
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors mt-2 cursor-pointer"
              onClick={() => increaseCartQuantity(id)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
