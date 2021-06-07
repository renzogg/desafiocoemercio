import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Content from '../src/components/Content'
import Subcribirme from './components/Pages/Subcribirme'
import Confirmacion from './components/Pages/Confirmacion';


const App = () =>(
  <Router>
    <Switch>
        <Route path="/" exact component={Content} />
        <Route path="/Subcribirme/:id" exact component={Subcribirme}/>
        <Route path="/Confirmacion/:id" exact component={Confirmacion}/>
          <Route component={()=>(
        <div className="">
          <h1>Error 404</h1>  
        </div>
    )}/>
     </Switch>
  </Router>
)


export default App;
