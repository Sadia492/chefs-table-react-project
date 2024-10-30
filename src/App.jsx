import { Outlet, useNavigation } from "react-router-dom";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";

function App() {
  const navigation = useNavigation();
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      {navigation.state === "loading" ? (
        <div className="text-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <Outlet></Outlet>
      )}
    </div>
  );
}

export default App;
