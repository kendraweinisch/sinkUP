import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Col>
                <Row>
                    <Image src="assets/person-1.jpg" square className="topprofiles" />
                    <Image src="assets/person-2.jpg" square className="topprofiles" />
                    <Image src="assets/person-3.jpg" square className="topprofiles" />
                    <Image src="assets/person-4.jpg" square className="topprofiles" />
                    <Image src="assets/person-5.jpg" square className="topprofiles" />


                </Row>
<div>

                <Row>
                    <Image src="assets/sinkUpLogo.jpg" square className="SULogo" />
                    <p>Meet other singles not looking to have children</p>
                    
        <a href="/">
                    <Button bsStyle="secondary search">Search Now</Button>
                    </a>
                </Row>
</div>
                <Row>
                    <Image src="assets/person-6.jpg" square className="topprofiles" />
                    <Image src="assets/person-7.jpg" square className="topprofiles" />
                    <Image src="assets/person-8.jpg" square className="topprofiles" />
                    <Image src="assets/person-9.jpg" square className="topprofiles" />
                    <Image src="assets/person-10.jpg" square className="topprofiles" />
                </Row>
            </Col>


        )
    }
}

