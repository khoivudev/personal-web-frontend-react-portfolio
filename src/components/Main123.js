import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './Landingpage123';
import Projects from './Projects123';
import Contact from './Contact123';
import TodoTask from './TodoTask123';

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