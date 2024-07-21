import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Private from "./Private";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [user, setuser] = useState(null);
  const [isFetching, setisFetching] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
        setisFetching(false);
        return;
      }
      setuser(null);
      setisFetching(false);
    });
  }, []);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/private"
            element={
              <ProtectedRoute user={user}>
                <Private />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
