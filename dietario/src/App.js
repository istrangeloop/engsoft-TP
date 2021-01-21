import logo from './logo.svg';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import MaterialExample from './MaterialExample.js'
import Home from './Home.jsx'
import Dieta from './Dieta.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/dieta' component={Dieta}/>
          </Switch>
        <MaterialExample />
      </BrowserRouter>
    </div>
  );
}

export default App;
