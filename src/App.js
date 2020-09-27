import React, {Component} from 'react';
import './App.css';
import {
    Layout, Header, Navigation, Drawer, Content,
    Footer, FooterSection, FooterLinkList,
} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
    render(){
        return(
            <div className="demo-big-content">
            <Layout>
                <Header title="K-Zone">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                
                <Drawer title="K-Zone">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>

                <Content>
                    <div className="page-content" />
                    <Main/>
                    <Footer size="mini"style={{background: '#f3f3f3',color: '#767777'}} className="custom-footer">
                        <FooterSection type="right">
                            <FooterLinkList>
                                <a href="/">Help</a>
                                <a href="/">Privacy & Terms</a>
                                <p style={{paddingTop:'6px'}}>&copy; Copyright 2020 Created by VuHuyKhoi</p>
                            </FooterLinkList>
                        </FooterSection>
                    </Footer>
                </Content>               
            </Layout>
            </div>
            
        );
    }
}

export default App;
