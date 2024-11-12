"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { useUserAuth } from "../_utils/auth-context"; // Import useUserAuth hook
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

const Page = () => {
  const { user } = useUserAuth(); // Get the user object
  const router = useRouter();

  // Redirect to the landing page if the user is not logged in
  useEffect(() => {
    if (!user) {
      router.push("/week-9"); // Redirect to the landing page
    }
  }, [user, router]);

  // Initialize state with itemsData from JSON
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(""); // New state variable

  // Event handler to add a new item to the items list
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Event handler for selecting an item
  const handleItemSelect = (item) => {
    // Clean up item name
    const cleanedName = item.name
      .split(",")[0] // Take only the item name before any comma
      .replace(/[^\w\s]/g, "") // Remove emojis
      .trim();

    setSelectedItemName(cleanedName); // Update selected item name state
  };

  // Return nothing while redirecting to avoid rendering content for non-logged-in users
  if (!user) return null;

  return (
    <main className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      <div className="flex space-x-8">
        <div className="flex-grow">
          <div className="mb-6">
            <NewItem onAddItem={handleAddItem} />
          </div>

          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-grow">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
};

export default Page;
