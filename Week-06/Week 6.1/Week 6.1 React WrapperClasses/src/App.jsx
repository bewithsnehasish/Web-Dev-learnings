import React from "react"
function App() {
  return <div>
    <CardWrapper innerComponent={<TextComponent />} />
  </div>
}


function CardWrapper({ innerComponent }) {
  return (
    <div style={{ border: "2px solid black", padding: '10px' }}>
      {innerComponent}
    </div>
  );
}

function TextComponent() {
  return <div>
    hi there
  </div>
}

export default App
