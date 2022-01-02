import "./App.css";
import logo from "./soi55-logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo img-fluid" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>coded by Candice Tomkins</small>
        </footer>
      </div>
    </div>
  );
}
