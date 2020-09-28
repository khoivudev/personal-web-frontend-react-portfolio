import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './landingpage';
import Projects from './projects';
import Contact from './contact';
import TodoTask from './todotask';

class Main extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route  path="/projects" component={Projects}/>
                <Route  path="/contact" component={Contact}/>
                <Route  path="/todotask" component={TodoTask}/>
            </Switch>
            
        );
    }
}

export default Main;