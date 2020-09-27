import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component{
    constructor(){
        super();
        this.state = {activeTab: 0 };
    }

    toggleCategories = ()=> {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height: "176px", background:
                        'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>
                            React Project #1
                        </CardTitle>
                        <CardText>
                            It is a long established It is a long established 
                            t is a long established 
                            It is a long established a long established It
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu> 
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height: "176px", background:
                        'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>
                            React Project #2
                        </CardTitle>
                        <CardText>
                            It is a long established It is a long established 
                            t is a long established 
                            It is a long established a long established It
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu> 
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height: "176px", background:
                        'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>
                            React Project #3
                        </CardTitle>
                        <CardText>
                            It is a long established It is a long established 
                            t is a long established 
                            It is a long established a long established It
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu> 
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height: "176px", background:
                        'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>
                            React Project #4
                        </CardTitle>
                        <CardText>
                            It is a long established It is a long established 
                            t is a long established 
                            It is a long established a long established It
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu> 
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height: "176px", background:
                        'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>
                            React Project #5
                        </CardTitle>
                        <CardText>
                            It is a long established It is a long established 
                            t is a long established 
                            It is a long established a long established It
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu> 
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color:'white', height: "176px", background:
                        'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>
                            React Project #6
                        </CardTitle>
                        <CardText>
                            It is a long established It is a long established 
                            t is a long established 
                            It is a long established a long established It
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu> 
                    </Card>

                </div>
               
            );
        }else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid"><h1>This is ExpressJs</h1></div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid"><h1>This is ReactJs</h1></div>
            )
        }else if(this.state.activeTab === 3){
            return(
                <div className="projects-grid"><h1>This is NodeJs</h1></div>
            )
        }
    }

    render(){
        return(
            <div className = "category-tabs">
                <Tabs activeTab={this.state.activeTab} 
                    onChange={(tabId)=>this.setState({activeTab: tabId})} 
                    ripple
                >
                    <Tab >MongoDB</Tab>
                    <Tab>ExpressJS</Tab>
                    <Tab>ReactJs</Tab>
                    <Tab>NodeJs</Tab>
                </Tabs> 
                <section>
                    <Grid>
                        <Cell col={12}>
                            <div >{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default Projects;