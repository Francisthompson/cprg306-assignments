"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { useUserAuth } from "../_utils/auth-context"; // Import useUserAuth hook
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service"; // Import Firestore services

const Page = () => {
  const { user } = useUserAuth(); // Get the user object
  const router = useRouter();

  // Redirect to the landing page if the user is not logged in
  useEffect(() => {
    if (!user) {
      router.push("/week-10"); // Redirect to the landing page
    }
  }, [user, router]);

  const [items, setItems] = useState([]); // Initialize state for items with an empty array
  const [selectedItemName, setSelectedItemName] = useState(""); // State for selected item name

  // Load items from Firestore
  const loadItems = async () => {
    if (user) {
      try {
        const fetchedItems = await getItems(user.uid); // Fetch items for the current user
        setItems(fetchedItems); // Set state with fetched items
      } catch (error) {
        console.error("Error loading items:", error);
      }
    }
  };

  // useEffect to load items when component mounts
  useEffect(() => {
    loadItems();
  }, [user]); // Run when the user changes

  // Event handler to add a new item to the items list
  const handleAddItem = async (newItem) => {
    if (user) {
      try {
        const itemId = await addItem(user.uid, newItem); // Add item to Firestore and get its ID
        const itemWithId = { id: itemId, ...newItem }; // Include the new Firestore ID in the item
        setItems((prevItems) => [...prevItems, itemWithId]); // Update state with the new item
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
  };

  // Event handler for selecting an item
  const handleItemSelect = (item) => {
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
