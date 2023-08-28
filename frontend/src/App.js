import Header from './components/Header';
import './App.css';
import NotesListPage from './pages/NotesListPage';
import {  Route } from 'react-router-dom';
import NotePage from './pages/NotePage'


function App() {
  return (

      <div className="container">
        <div className='app'>
          <Header />
          <Route exact path='/' component={NotesListPage} />
          <Route path='/note/:id' component={NotePage} />
        </div>
      </div>

  );
}

export default App;
