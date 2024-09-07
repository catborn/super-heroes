import "./App.css";
import Header from "./components/header.jsx";
import Content from "./components/content.jsx";

function App() {
  return (
    <div>
      <div className="Header">
        <Header />
      </div>
      <div className="App">
        <Content />
      </div>
    </div>
  );
}

export default App;
