import React, { Component } from "react";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import LoadingIcon from "./Loading";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      idLoaded: false,
    };
  }

  componentDidMount() {
    axios
      .get("/api/project")
      .then((res) => {
        const projects = res.data;
        this.setState({
          isLoaded: true,
          projects: projects,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { isLoaded, projects } = this.state;
    if (!isLoaded) {
      return (
        <div className="loading-container">
          <LoadingIcon />
        </div>
      );
    } else {
      return (
        <div className="projects-container">
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              {projects.map(
                ({
                  name,
                  description,
                  img_url,
                  tech,
                  project_url,
                  github_url,
                }) => (
                  <Grid item xs={4}>
                    <Card style={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia
                          style={{
                            color: "white",
                            height: "250px",
                            background: `url(${img_url}) center / cover`,
                          }}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {description}
                            <br />
                            Tech:{" "}
                            {tech.map((tech_item) => (
                              <span>{tech_item} </span>
                            ))}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button
                          href={github_url}
                          target="_blank"
                          color="primary"
                        >
                          Github
                        </Button>
                        <Button
                          href={project_url}
                          target="_blank"
                          color="primary"
                        >
                          Demo
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default Projects;
