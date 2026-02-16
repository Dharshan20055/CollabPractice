import './App.css';
import NavBar from './components/NavBar';
import ContactPage from './components/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <ContactPage />
    </div>
  );
}

export default App;
