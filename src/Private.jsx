import React from "react";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const Private = () => {
  function Private() {
    const handleSignout = () => {
      signOut(auth)
        .then(() => alert("Signed Out sucsessfully"))
        .catch((error) => {
          console.log(error);
          alert(error.message);
        });
    };
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Private</h1>
      <button onClick={handleSignout}>SignOut</button>
    </div>
  );
};

export default Private;
