// SignIn.js
import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const handleSignIn = async () => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, 'your-email@example.com', 'your-password');
      console.log("User signed in!");
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
