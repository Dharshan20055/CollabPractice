import './App.css';
import NavBar from './components/NavBar';
import ContactPage from './components/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <ContactPage />
      <Footer/>
    </div>
  );
}

export default App;