import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Section from './components/Section'
import {DataProvider} from './components/Context'

function App() {
  
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Section/>
          </Router>
        </div>
      </DataProvider>
    );
  
}

export default App;
