import React from 'react';
import { Col } from 'react-bootstrap';
import './slides.css';

function slides({ title, price, para, img }) {
    return (
        <Col xl={5} sm={12} className='card'>
            <img src={img} />
            <div>
                <div className='head'>
                    <h1>{title}</h1>
                    <span>${price} USD</span>
                </div>
                <p>{para}</p>
                <div className='inp'>
                    <input type='number' value={1}/>
                    <button className='btn btn-info'>Add to Cart</button>
                </div>
            </div>
        </Col>
    )
}


export default slides