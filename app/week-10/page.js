"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  // Get the user object and sign-in/out functions from the useUserAuth hook
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Function to handle user sign-in
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  // Function to handle user sign-out
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping List App</h1>

      {user ? (
        // Display user info, logout button, and shopping list link when user is signed in
        <div className="text-center">
          <p className="mb-4">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={handleSignOut}
            className="bg-red-600 px-4 py-2 rounded mb-4"
          >
            Log Out
          </button>
          <Link
            href="/week-10/shopping-list"
            className="text-blue-400 hover:underline ml-5"
          >
            Go to Shopping List
          </Link>
        </div>
      ) : (
        // Display login button when user is not signed in
        <button
          onClick={handleSignIn}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Log In with GitHub
        </button>
      )}
    </main>
  );
};

export default Page;
