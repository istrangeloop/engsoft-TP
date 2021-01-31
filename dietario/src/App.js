import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import MaterialExample from './MaterialExample.js'
import Home from './Home.jsx'
import Dieta from './Dieta.jsx';
import ListWrapper from './Component/listWrapper'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/dieta' component={Dieta}/>
            <Route exact path='/foods' component={ListWrapper}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
