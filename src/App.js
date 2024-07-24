
import './App.css';
import Navbar from '../src/Components/Navbar'
import { BrowserRouter as Router, } from 'react-router-dom';
import ProfileDetails from './Components/ProfileDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ProfileDetails />
      </div>
    </Router>
  );
}

export default App;
