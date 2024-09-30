"use client";
import { useState } from "react";

const NewItem = () => {
  const [quantity, setQuantity] = useState(1);

  // Increment function
  const increment = () => {
    setQuantity((prevQuantity) =>
      prevQuantity < 20 ? prevQuantity + 1 : prevQuantity
    );
  };

  // Decrement function
  const decrement = () => {
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    );
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-2xl">Quantity: {quantity}</p>

      <div className="flex space-x-4">
        {/* Decrement Button */}
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 bg-red-500 text-white font-bold ${
            quantity === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          -
        </button>

        {/* Increment Button */}
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 bg-green-500 text-white font-bold ${
            quantity === 20 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NewItem;
