import { useState } from 'react'
import React from 'react';

//This below is one way to stop re renderringing of the componenets in the sytemm well in this we are making the fnctions or the props which we need to re-render seperate so that the particular prop only re-renders 
//This is ONE WAY of doing Rerenderringing
// function App() {
//   return (
//     <>
//       <HeaderWithButton />
//       <Header title="Just Checking everything is working properly or not"></Header>
//       <Header title="Just Checking everything is working properly or not"></Header>
//       <Header title="Just Checking everything is working properly or not"></Header>
//     </ >
//   )
// }

// function HeaderWithButton() //   const [title, setTitle] = useState("Here Now the Name will be Shuffled with numbers:")
//   const [title, setTitle] = useState("Here Now the Name will be Shuffled with numbers:")

//   function updateTitle() {
//     setTitle("My name is " + Math.random())
//   }

//   return <div>
//     <button type="button" onClick={updateTitle}>Update the title</button>
//     <Header title={title}></Header>
//   </div>

// }

// function Header({ title }) {
//   return <div>
//     {title}
//   </div>
// }

//SECOND WAY of doing the re-rendering is using the memo function in the sytem 
function App() {
  const [title, setTitle] = useState("Here is the Update of the Config");
  function updateTitle() {
    setTitle("My name is " + Math.random())
  }

  return (
    <div>
      <button type="button" onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="harkirat1"></Header>
      <Header title="harkirat2"></Header>
      <Header title="harkirat2"></Header>
      <Header title="harkirat2"></Header>
      <Header title="harkirat2"></Header>
      <Header title="harkirat2"></Header>
      <Header title="harkirat2"></Header>
      <Header title="harkirat2"></Header>
      <Header title="harkirat2"></Header>
    </div>
  )
}

// function Header({ title }) {
//   return <div>
//     {title}
//   </div>
// }


const Header = React.memo(function Header({ title }) {
  return <div>
    {title}
  </div>
})

export default App
