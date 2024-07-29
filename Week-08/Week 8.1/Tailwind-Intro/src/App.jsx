import { RevenueCard } from "../components/RevenueCard";
import "./App.css";

function App() {
  return (
      <div className="grid grid-cols-20">
        <RevenueCard
          title={"Amount Pending "}
          amount={"92,321.20"}
          orderCount={13}
        />
      </div>
  );
}
export default App;
