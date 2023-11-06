import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

function OAuth() {
  const handleContinueWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch {}
  };
  return (
    <button
      onClick={handleContinueWithGoogle}
      className="text-white bg-red-600 p-2 rounded-lg uppercase font-semibold hover:opacity-95"
    >
      Continue with Google
    </button>
  );
}

export default OAuth;
