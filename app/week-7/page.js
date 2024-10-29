"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";

const Page = () => {
  // Initialize state with itemsData from JSON
  const [items, setItems] = useState(itemsData);

  // Event handler to add new item to the items list
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      {/* Render NewItem component and pass handleAddItem as onAddItem prop */}
      <NewItem onAddItem={handleAddItem} />

      {/* Render ItemList component and pass items state as prop */}
      <ItemList items={items} />
    </main>
  );
};

export default Page;
