import React from 'react';
import './footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div className='footerCont'>
            <Container className='cont'>
                <Row>
                    <Col xs={3}>
                        <img src="./Assets/Logo.svg" className='logoImg' />
                        <p>Takeaway & Delivery template for small - medium businesses.</p>
                    </Col>
                    <Col xs={3} className='list'>
                        <ul>
                            <li className='TableHead'>Company</li>
                            <li>Home</li>
                            <li>Order</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </Col>
                    <Col xs={3} className='list'>
                        <ul>
                            <li className='TableHead'>Template</li>
                            <li>Style Guide</li>
                            <li>Changelog</li>
                            <li>Licence</li>
                            <li>Webflow University</li>
                        </ul>
                    </Col>
                    <Col xs={3} className='list'>
                        <ul>
                            <li className='TableHead'>FLOWBASE</li>
                            <li>More Cloneables</li>
                        </ul>
                    </Col>
                </Row>
                <Row className='rows'>
                    <Col xs={6}>
                        <p>Built by <a href='#'>Souvik Bhattacharyya</a> · Powered by <a href='#'>Webflow</a></p>
                    </Col>
                    <Col xs={6}>
                        <div className='icons'>
                            <FaInstagram className='icon'/>
                            <FaYoutube className='icon'/>
                            <FaTwitter className='icon'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer