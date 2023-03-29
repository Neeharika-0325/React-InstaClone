import React from 'react';
import home from '../../images/home.png';
import { Link } from 'react-router-dom';
//homepage--->home-content bootstrap//
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing.css'

export default function LandingPage(){
    return (
        <div className='home-container'>
        <Card className='home-content' style={{ width: '24 rem' }}>
            <Card.Img className="landing-img" variant="left" src={home} alt='Landing-image' />
            <Card.Body className="landing-content">
                <Card.Title>10x Team 04</Card.Title>
                <Link to={'new'}><Button variant="primary">Enter</Button></Link>
            </Card.Body>
        </Card>

            {/* <div className='landing-img'>
                <img src={home} alt='Landing-image'/>
            </div>
            <div className='landing-content'>
                <h1>10x Team 04</h1>
                <Link to={'post/all'}><button>Enter</button></Link>
            </div> */}
        </div>
    )
}