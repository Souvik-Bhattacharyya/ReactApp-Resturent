import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Hero.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";



function Hero({ buttontext, star, imageDiff, bgImg, text, para, swap }) {
    return (
        <>
            <Container className='Container mb-5'>
                <img src={bgImg == null ? "./assets/fff.jpg" : bgImg} className='bgImg' style={{ left: "-50px", width: '115%' }} />
                {swap == "true" ? <Row>
                    <Col xs={12} md={6} className='rightCol'>
                        <img src={imageDiff} />
                    </Col>
                    <Col xs={12} md={6} className='leftCol'>
                        <h1>{text}</h1>
                        <p>{para}</p>
                        <button className='btn btn-info mt-4 p-3 mb-3 action-btn'>{buttontext}</button>
                        {star == 'true' ?
                            <p className='para'>
                                <span className='star'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                    <FaRegStar />
                                </span>
                                <br className='mb-2' />
                                <span className='info'>4.8 out of 5 </span> based on 2000+ reviews
                            </p>
                            : <div className='yummImg'></div>
                        }
                    </Col>
                </Row> : <Row>
                    <Col xs={12} md={6} className='leftCol'>
                        <h1>{text}</h1>
                        <p>{para}</p>
                        <button className='btn btn-info btn-lg mt-4 p-3 mb-3'>{buttontext}</button>
                        {star == 'true' ?
                            <p className='para'>
                                <span className='star'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                    <FaRegStar />
                                </span>
                                <br className='mb-2' />
                                <span className='info'>4.8 out of 5 </span> based on 2000+ reviews
                            </p>
                            : <div className='yummImg'></div>
                        }
                    </Col>
                    <Col xs={12} md={6} className='rightCol'>
                        <img src={imageDiff} />
                    </Col>
                </Row>}
            </Container>
        </>
    )
}

export default Hero;