import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { PostData } from "../UtilityFunction/API";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/Slice/userSlice";
import { useNavigate } from "react-router-dom";

function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      PostData("api/v1/google", payload, updateGoogleHandler);
    } catch {}
  };

  const updateGoogleHandler = (response) => {
    dispatch(signInSuccess(response.data));
    navigate("/");
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
