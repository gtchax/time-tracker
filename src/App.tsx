import "./App.css";
import NewEntry from "./components/forms/NewEntry";
import Header from "./components/header/Header";
import Timer from "./components/timer/Timer";

function App() {
  return (
    <>
      <Header />
      <Timer />
      <NewEntry />
    </>
  );
}

export default App;
