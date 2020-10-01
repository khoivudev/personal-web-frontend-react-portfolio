import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <h2>Vu Huy Khoi</h2>
            <img
              src={process.env.REACT_APP_MY_AVATAR_URL}
              alt="avatar"
              className="avatar-img"
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              {/* Something */}
            </p>
          </Grid>

          <Grid item xs={6}>
            <h2>Contact me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemText
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    {/* <span>(123) 456-7890</span> */}
                  </ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemText
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-fax" aria-hidden="true" />
                    {/* (123) 456-7890 */}
                  </ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemText
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    {/* someone@example.com */}
                  </ListItemText>
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Contact;
