import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    // Reference the user's items subcollection in Firestore
    const itemsRef = collection(db, "users", userId, "items");

    // Query the items subcollection
    const q = query(itemsRef);
    const querySnapshot = await getDocs(q);

    // Map the documents to an array of item objects
    const items = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Document ID
      ...doc.data(), // Document data
    }));

    return items;
  } catch (error) {
    console.error("Error retrieving items:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};

export const addItem = async (userId, item) => {
  try {
    // Reference the user's items subcollection in Firestore
    const itemsRef = collection(db, "users", userId, "items");

    // Add the new item to the subcollection
    const docRef = await addDoc(itemsRef, item);

    // Return the ID of the newly created document
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};
