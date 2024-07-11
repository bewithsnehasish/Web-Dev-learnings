
//This is a way to declare the wrapper classes in the React 
function App() {
  return <div>
    <CardWrapper>
      hi there
    </CardWrapper>
  </div>
}


function CardWrapper({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: '10px' }}>
      {children}
    </div>
  );
}

// function TextComponent() {
//   return <div>
//     hi there
//   </div>
// }

export default App
