"use client";
import { useState } from "react";

const NewItem = ({ onAddItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

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

  // handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id: Math.random().toString(36).substring(2, 9), // generate a random id
      name,
      quantity,
      category,
    };

    onAddItem(item); // Call the onAddItem prop with the new item

    // Reset state variables
    setName("");
    setQuantity(1);
    setCategory("produce");
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

      {/* Form for handling item submission */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4"
      >
        {/* Name Field */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item Name"
          className="px-4 py-2 border rounded text-black"
          required
        />

        {/* Category Field */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded bg-white text-black"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-bold"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default NewItem;
