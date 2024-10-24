import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";

function App() {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
    </div>
  );
}

export default App;
