import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './Landingpage';
import Projects from './Projects';
import Contact from './Contact';
import TodoTask from './TodoTask';

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