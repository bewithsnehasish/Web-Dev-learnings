import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <Profile
        image="../Check.jpg"
        name="Snehasish Mandal"
        age="23"
        location={"London"}
        followers={"232"}
        likes={"322"}
        photos={"12"}
      />
    </div>
  );
}

export default App;
