import React from 'react';
import { Route, Switch,BrowserRouter, Redirect} from "react-router-dom";
import Upload from './Components/Uploads/Upload';
import Records from './Components/Records/Records';
import Play2 from './Components/Play2';




export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/records" />
                <Route exact path="/landing" component={Records}/>
                <Route exact path="/records" component={Records}/>
                <Route exact path="/upload" component={Upload}/>
                <Route exact path="/play" component={Play2}/>
                {/* <Route exact path="/play2" component={Index}/> */}
            </Switch>
        </BrowserRouter>        
    );
  

   
}
