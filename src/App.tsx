import "./App.css";
import NewEntry from "./components/forms/new-entry/NewEntry";
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
