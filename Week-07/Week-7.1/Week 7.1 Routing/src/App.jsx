import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          Landing
        </button>

        <button
          type="button"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default App;
