import React, {Component} from 'react';
import {Tabs, Tab} from 'react-mdl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

class Projects extends Component{
    constructor(){
        super();
        this.state = {activeTab: 0 };
    }

    toggleCategories = ()=> {
        if(this.state.activeTab === 0){
          return(
            <div className="projects-container"><h4>MongoDB projects empty </h4></div>
        )
        }else if(this.state.activeTab === 1){
            return(
                <div className="projects-container"><h4>ExpressJs projects empty</h4></div>
            )
        }else if(this.state.activeTab === 2){
          return(
            <div className="projects-container">
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={4}>
                        <Grid item xs={4}>
                            <Card style={{ maxWidth: 345}}>
                                <CardActionArea>
                                  <CardMedia
                                    style={{color:'white', 
                                    height: "250px", 
                                    background:'url(https://blogsaays-com-3vkgf8gqdp8entcca1.netdna-ssl.com/wp-content/uploads/2019/05/Todo-list.jpg) center / cover'}}
                                  />
          
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                          TodoTask
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <Button color="primary">Github</Button>
                                    <Button color="primary">CodePen</Button>
                                    <Button href="/todotask" color="primary">Demo</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card style={{ maxWidth: 345}}>
                                <CardActionArea>
                                    <CardMedia
                                        style={{color:'white', 
                                        height: "250px", 
                                        background:'url(https://miro.medium.com/max/250/0*CuCS0IzqzdMoAj6W.png) center / cover'}}
                                    />

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        React Project #2
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
            
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <Button color="primary">Github</Button>
                                    <Button color="primary">CodePen</Button>
                                    <Button href="/todotask" color="primary">Demo</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card style={{ maxWidth: 345}}>
                                <CardActionArea>
                                    <CardMedia
                                        style={{color:'white', 
                                        height: "250px", 
                                        background:'url(https://miro.medium.com/max/250/0*CuCS0IzqzdMoAj6W.png) center / cover'}}
                                    />

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        React Project #3
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                          
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <Button color="primary">Github</Button>
                                    <Button color="primary">CodePen</Button>
                                    <Button href="/todotask" color="primary">Demo</Button>
                                </CardActions>
                            </Card>
                        </Grid>                
                    </Grid>
                </Grid>
            </div>
            );
        }else if(this.state.activeTab === 3){
            return(
                <div className="projects-container"><h4>Nodejs projects empty</h4></div>
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
                        <Grid item xs={12}>
                            <div >{this.toggleCategories()}</div>
                        </Grid>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default Projects;