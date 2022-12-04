import FirstView from './components/firstView/FirstView';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" render={() => <FirstView />} />
          <Route exact path="/merry-christmas" render={() => <div>This is work in progress</div>} />
        </Switch>
      </header>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
