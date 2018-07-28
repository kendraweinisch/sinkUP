import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/person-1.jpg" className="header-image" />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                    <Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
                    <h3>Frank the Tank</h3>
                    <p>Maybe there's a little something happening right here. It's hard to see things when you're too close. Take a step back and look. If you didn't have baby clouds, you wouldn't have big clouds. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. You can do anything here - the only pre-requisite is that it makes you happy.</p>
                    </Col>
                    </Grid>
                 </div>
        )
    }
}