import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="top-bar">
          <Header />
          <Nav />
        </div>
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
