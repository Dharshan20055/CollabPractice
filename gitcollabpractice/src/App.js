import './App.css';
import NavBar from './components/NavBar';
import ContactPage from './components/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ContactPage />
      <Home />
    </div>
  );
}

export default App;