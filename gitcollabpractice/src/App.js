// import './App.css';
// import NavBar from './components/NavBar';
// import Home from './components/Home';


// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Home />
//     </div>
//   );
// }

// export default App;

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
      <ContactPage />
      <Home />
      <About />
    </div>
  );
}

export default App;
