function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ backgroundColor: "red" }}>......</div>
        <div style={{ backgroundColor: "yellow" }}>......</div>
        <div style={{ backgroundColor: "green" }}>.......</div>
      </div>

      <br />
      <div className="flex justify-center">
        <div style={{ backgroundColor: "red" }}>......</div>
        <div style={{ backgroundColor: "yellow" }}>......</div>
        <div style={{ backgroundColor: "green" }}>......</div>
      </div>

      <br />
      <div className="grid grid-cols-10">
        <div className="bg-red-500 w-full">.......</div>
        <div className="bg-yellow-500 w-full">.......</div>
        <div className="bg-blue-500 w-full">.......</div>
        <div className="bg-red-500 w-full">.......</div>
      </div>

      <br />
      <div className="flex">
        <div className="bg-red-500 w-[40%]">.......</div>
        <div className="bg-yellow-500 w-[20%]">.......</div>
        <div className="bg-blue-500 w-[20%]">.......</div>
        <div className="bg-green-500 w-[20%]">.......</div>
      </div>
    </>
  );
}

export default App;
