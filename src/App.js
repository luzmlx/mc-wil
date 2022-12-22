import FirstView from './components/firstView/FirstView';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Slideshow from './components/slideshow/slideshow';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" render={() => <FirstView />} />
          <Route exact path="/slideshow" render={() => <Slideshow />} />
        </Switch>
      </header>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
