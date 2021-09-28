import AllEstateProp from './Components/AllEstateProp';
import AddEstateProp from './Components/AddEstateProp';
import EditProp from './Components/EditProp';
import NavBar from './Components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/all" component={AllEstateProp} />
        <Route exact path="/add" component={AddEstateProp} />
        <Route exact path="/edit/:id" component={EditProp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
