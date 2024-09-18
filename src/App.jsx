import "./App.css";
import Item from './components/item'
import logo from './assets/logo.png'


function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" /> 
      <h2>React + Vite</h2>
      <Item />
      <Item />
    </div>
  );
}

export default App;
