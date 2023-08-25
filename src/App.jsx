import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './view/Home';

function App() {
  return (
    <div className="App">
      { <header /> }
      <Home/>
     <NavBar list={["Home","About","Courses","contact"]} />
     
    </div>
  );
}

export default App;
