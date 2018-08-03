import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, DropdownButton, MenuItem, Media } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <Row>
                <Col>
                    <Image src="assets/person-1.jpg" className="topprofiles" />
                    <Image src="assets/person-2.jpg" className="topprofiles" />
                    <Image src="assets/person-3.jpg" className="topprofiles" />
                    <Image src="assets/person-4.jpg" className="topprofiles" />
                    <Image src="assets/person-5.jpg" className="topprofiles" />
                </Col>
            </Row>
                <Row className="text-center">
                    <Col md={2}/>
                    <Col md={8} className="home-heading">
                    <Media>
                    <Media.Left>
                        <Image src="assets/sinkUpLogo.png" className="SULogo"/>
                    </Media.Left>
                    <Media.Body>
                            <h3>Desire the "Dual Income, No Kids (DINK)" lifestyle?</h3>
                            <h3> Meet other singles not looking to have children!</h3>

                            <DropdownButton className="search" title="Who are you looking to meet?" id="dropdown-size-large">
                                <MenuItem eventKey="1">Woman Looking for Man</MenuItem>
                                <MenuItem eventKey="2">Man Looking for Woman</MenuItem>
                                <MenuItem eventKey="3">Woman Looking for Woman</MenuItem>
                                <MenuItem eventKey="4">Man Looking for Man</MenuItem>
                            </DropdownButton>
                            &nbsp;
                            <a href="/quiz"> 
                                <Button className="search">Search Now</Button>
                            </a>
                    </Media.Body>
                    </Media>
                    </Col>
                    <Col md={2}/>
                </Row>
                <Row>
                    <Image src="assets/person-6.jpg" className="topprofiles" />
                    <Image src="assets/person-7.jpg" className="topprofiles" />
                    <Image src="assets/person-8.jpg" className="topprofiles" />
                    <Image src="assets/person-9.jpg" className="topprofiles" />
                    <Image src="assets/person-10.jpg" className="topprofiles" />
                </Row>
            </React.Fragment>


        )
    }
}

