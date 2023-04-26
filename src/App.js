

import './App.css';
import Header from './Component/Header';
import Landing from './Component/Landing';
import Navbar from './Component/Navbar';
import Projects from './Component/Projects';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Landing />
      <Projects />
    </div>
  );
}

export default App;
