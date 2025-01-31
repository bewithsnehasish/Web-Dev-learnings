import "./App.css";

function App() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header Section */}
      <div className="h-40 bg-green-400 flex flex-col justify-center items-center text-white gap-4">
        <h1 className="font-extrabold text-4xl">
          Welcome to Your Website Task
        </h1>
        <div className="flex flex-row justify-center items-center gap-4 font-bold">
          <a href="/about">Home</a>
          <a href="/home">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex-1 p-4">
        <div className="flex flex-auto justify-between w-full gap-80">
          <div className="bg-gray-100 rounded-lg p-6 w-full md:w-1/3">
            <h4 className="text-green-600 text-2xl font-bold">About CSS</h4>
            <p className="text-sm font-black">
              Cascading Style Sheets(CSS) allow you to style and layout your web
              pages, adding colors, spacing and more.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 w-full md:w-1/3">
            <h4 className="text-green-600 text-2xl font-bold">Box Model</h4>
            <p className="text-sm font-black">
              The CSS box model describes the rectangular boxes generaated for
              elements. It includes margins, borders, padding and the actual
              Content.
            </p>
          </div>
        </div>
        <div className="flex justify-items-start w-full gap-80 mt-14">
          <div className="bg-gray-100 rounded-lg p-6 w-full md:w-1/3">
            <h4 className="text-green-600 text-2xl font-bold">
              Responsive Design
            </h4>
            <p className="text-sm font-black">
              Responsive design ensures your webpage looks great on all devices
              , from desktops to mobile phones.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="h-16 bg-gray-800 flex flex-col justify-center items-center text-white">
        <p>
          Created by{" "}
          <a
            href="https://github.com/bewithsnehasish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            Snehasish Mandal
          </a>{" "}
          | Follow us on{" "}
          <a href="/instagram" className="text-green-600">
            Instagram
          </a>
          |{" "}
          <a href="/instagram" className="text-green-600">
            Instagram
          </a>
          |{" "}
          <a href="/instagram" className="text-green-600">
            Instagram
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
