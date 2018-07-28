import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';


export default class News extends Component {
    render() {
        return (
            <div>
                <Image src="assets/person-1.jpg" className="header-image" />
                <Grid>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                        <p>
                        Happy painting, God bless. In your world you can create anything you desire. Pretend you're water. Just floating without any effort. Having a good day. Paint anything you want on the canvas. Create your own world.
                        </p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                        <Image src="assets/person-1.jpg"/>
                        <p>Just take out whatever you don't want. It'll change your entire perspective. Isn't it great to do something you can't fail at? Maybe there's a happy little bush that lives right there. That is when you can experience true joy, when you have no fear.</p>
                        </Col>
                    </Row>
                    </Grid>
                 </div>
        )
    }
}