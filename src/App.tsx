import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ListPage from './components/ListPage';

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/list">List</Link></li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;