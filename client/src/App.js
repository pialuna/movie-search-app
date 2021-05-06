import Navbar from "./components/Navbar";
import data from "./dummyData";

function App() {
  return (
    <>
      <Navbar />
      <div className="m-5 flex flex-col items-center">
        <h1>Movies</h1>
        <h5 className="text-gray-400">
          (Movies from 2001 whose title contains "Space")
        </h5>
        <label className="sr-only" for="search">
          Search for movies
        </label>
        <input
          className="w-6/12 bg-white border-2 rounded-md shadow-sm p-2 my-2 flex flex-col items-start"
          type="text"
          id="search"
          name="search"
          placeholder="Search"
        ></input>
      </div>
    </>
  );
}

export default App;
