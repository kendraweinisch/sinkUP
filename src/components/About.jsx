import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                    <h3>About SINK Up</h3>
                    <p>Gone are the days when nuclear families were the norm and childless people were stigmatized. More people today are choosing not to have kids,
                        thus allowing them to enjoy disposable income as well as freedom from dirty diapers and PTA meetings. Mainstream dating sites
                        are dominated by breeders, so even people not looking to have children have to leave the option open just to find a date. SINK Up is different. 
                        Our singles know children won't be in their future--but love and adventure will be!
                    </p>
                    </Col>
                    </Grid>
                 </div>
        )
    }
}