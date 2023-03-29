import React,{useState} from 'react';
//Postviewpage--->post content nav bootstrap//
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import circleicon from '../../../images/circleicon.png';
import camera from '../../../images/camera.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPost.css';



export default function NewPost(){
    const [formData,setFormDate]=useState({
        image:null,
        author:'',
        location:'',
        description:''
    })
    function SaveFormData(event){
        event.preventDefault();
        const formValues=new FormData(event.target);
    }


    return (
        <>
            <Navbar>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={circleicon} alt='Logo'/>
                    <span>Insta Clone</span>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <img src={camera} alt="Camera-icon"/>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <div className='new-post-container'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Form onSubmit={SaveFormData}>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control name='Image' type="file" />
                        </Form.Group>
                        <InputGroup className="mb-3">
                            <Form.Control aria-label='Author' name='author' placeholder='Enter Name' />
                            <Form.Control aria-label="Location" name='location' placeholder='Enter Location'/>
                        </InputGroup>
                        <Form.Control size="lg" type="text" name='description' placeholder="Description" />
                        <div className="btn-container">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                        
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
        
    )
}