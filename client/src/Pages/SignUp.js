import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { PostData } from "../UtilityFunction/API";

function SignUp() {
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const signUpHandler = () => {
    PostData("api/v1/signup", userDetails, updateSignUpHandler);
  };

  const inputChangeHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const updateSignUpHandler = (response) => {
    if (response?.data?.success) {
      navigate("/signin");
    } else {
      setError(response?.data?.message);
    }
  };

  return (
    <div className="flex  flex-col gap-4 mx-auto mt-10 p-4 max-w-xl border rounded-lg">
      <div>SignUp</div>
      <div className="flex flex-col gap-4 ">
        <input
          className="p-3 border rounded-md "
          type="text"
          placeholder="Username"
          name="username"
          value={userDetails.username}
          onChange={inputChangeHandler}
        />
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
        {isLoading ? "Loading..." : "Sign Up"}
      </button>
      {error ? <div>{error}</div> : ""}
      <div className="flex gap-4">
        <div>Already a user?</div>
        <Link to={"/signin"}>
          <div>Sign In</div>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
