import Suggestions from "./components/suggestions/Suggestions";
import NavBar from "./components/navbar/NavBar";
import FcontextProvider from "./store/FcontextProvider";

const App = () => {
  return (
    <FcontextProvider>
      <div className="container">
        <NavBar />
        <Suggestions />
      </div>
    </FcontextProvider>
  );
};

export default App;
