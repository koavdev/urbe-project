import Header from './components/Header';
import './App.css';
import NotesListPage from './pages/NotesListPage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NotePage from './pages/NotePage'


function App() {
  return (
    <Router>
      <div className="container">
        <div className='app'>
          <Header />
          <Route path='/' exact component={NotesListPage} />
          <Route path='/note/:id' component={NotePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
