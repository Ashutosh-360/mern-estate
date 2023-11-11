import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { PostData } from "../UtilityFunction/API";

function OAuth() {
  const handleContinueWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      let payload = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      };
      PostData("api/v1/google", payload);
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
