import './App.css';
import NavBar from './components/NavBar';
import ContactPage from './components/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Footer from './components/Footer';

import About from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <ContactPage />
      <Footer/>
    </div>
  );
}

export default App;
