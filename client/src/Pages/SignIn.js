import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInStart } from "../redux/Slice/userSlice";
import { PostData } from "../UtilityFunction/API";
import OAuth from "../Components/OAuth";

function SignIn() {
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUpHandler = () => {
    dispatch(signInStart());
    PostData("api/v1/signin", userDetails, updateSignUpHandler);
  };

  const inputChangeHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const updateSignUpHandler = (response) => {
    if (response?.data?.success) {
      setIsLoading(false);
      navigate("/");
    } else {
      setError(response?.data?.message);
    }
  };

  return (
    <div className="flex  flex-col gap-4 mx-auto mt-10 p-4 max-w-xl border rounded-lg">
      <div>SignIn</div>
      <div className="flex flex-col gap-4 ">
        {/* <input
          className="p-3 border rounded-md "
          type="text"
          placeholder="Username"
          name="username"
          value={userDetails.username}
          onChange={inputChangeHandler}
        /> */}
        <input
          className="p-3 border rounded-md "
          type="text"
          placeholder="Email"
          name="email"
          value={userDetails.email}
          onChange={inputChangeHandler}
        />
        <input
          className="p-3 border rounded-md "
          type="password"
          placeholder="Password"
          name="password"
          value={userDetails.password}
          onChange={inputChangeHandler}
        />
      </div>
      <button
        disabled={isLoading}
        className="uppercase p-2 rounded-md bg-gray-500 disabled:opacity-70 text-white font-semibold"
        onClick={signUpHandler}
      >
        {isLoading ? "Loading..." : "Sign In"}
      </button>
      <OAuth />
      <div className="flex gap-4">
        <div>Already a user?</div>
        <Link to={"/signup"}>
          <div>Sign In</div>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
