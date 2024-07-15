import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Landing
        </button>

        <button
          type="button"
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
          Dashboard
        </button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
