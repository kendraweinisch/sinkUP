import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import './Home.css';

let preferenceRedirect
const storePreference = (eventKey) => {
preferenceRedirect = "/quiz?sexuality=" + eventKey
}

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
                        <Image src="assets/sinkUpLogo.png" className="SULogo"/>
                            <h3>Desire the "Dual Income, No Kids (DINK)" lifestyle?</h3>
                            <h3> Meet other singles not looking to have children!</h3>

                            <DropdownButton className="search" title="Who are you looking to meet?" id="dropdown-size-large">
                                <MenuItem onClick={storePreference('1')}>Woman Looking for Man</MenuItem>
                                <MenuItem onClick={storePreference('2')}>Man Looking for Woman</MenuItem>
                                <MenuItem onClick={storePreference('3')}>Woman Looking for Woman</MenuItem>
                                <MenuItem onClick={storePreference('4')}>Man Looking for Man</MenuItem>
                            </DropdownButton>
                            &nbsp;
                            <a href={preferenceRedirect}> 
                                <Button className="search">Search Now</Button>
                            </a>
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

