import './App.css';
import ItemListContainer from './components/containers/ItemListContainer';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos a Parfum Universum "}/>
    </div>
  );
}

export default App;
