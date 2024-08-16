import React, { useState } from 'react';
import { Form, ButtonToolbar, Button, Schema, Message } from 'rsuite'; 
import { IoMdContact } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdNaturePeople } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import 'rsuite/dist/rsuite.min.css';
import '../App.css'
import familyLogo from './bestated_family.jpg'
import NotificationMessage from '../Notification';


const ContactPage = () =>{

    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('info');

    const [formValue, setFormValue] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        phone: '',
        state: '',
        beneficiaries: '',
        assets: ''
    })

    const handleChange = (value) => {
        setFormValue(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`formValue: ${JSON.stringify( formValue )}`);
        // try {
        //     const response = await fetch(
        //         'https://chenanthy-backend-server.com/api/', 
        //         {
        //             method: 'POST', 
        //             headers: {'Content-Type': 'application/json'},
        //             body: JSON.stringify(formValue)
        //         }
        //     );
            
        //     if (!response.ok) {
        //         throw new Error('API was not being sent POST successfullu')
        //     }

        //     const data = await response.json();
        //     console.log('Success: ', data);

        // } catch (error) {
        //     console.log('Error:', error);
        // }
    
        setMessage('Your Info Submitted Successfully!');
        setMessageType('success');
    } 

    return (
        <div className='container'>

            <div className='content'>

            <img
                src={familyLogo}
                alt="Bestated Family"
                style={{ maxWidth: '60%', height: 'auto' }} 
            />

            <br/>

            <h4>Leave your information our team will reach out to you soon</h4>

            <br/>

            <Form fluid
                formValue={formValue} 
                onChange={handleChange} 
                onSubmit={handleSubmit}
            >
                <div className='form'>
                    <IoMdContact className='icon-layout'/>
                    <div style={{ display: 'flex', flexGrow: 1 }}>
                        <Form.Group className='form-group'>
                            <Form.ControlLabel htmlFor='firstName'>First Name *</Form.ControlLabel>
                            <Form.Control name='firstName' id='firstName' type='text' required />
                        </Form.Group>

                        <Form.Group className='form-group' style={{ marginLeft: '40px' }}>
                            <Form.ControlLabel htmlFor='lastName'>Last Name *</Form.ControlLabel>
                            <Form.Control name='lastName' id='lastName' type='text' required />
                        </Form.Group>
                    </div>
                </div>
                
                <div className='form'>
                    <MdBusinessCenter className='icon-layout'/>
                    <Form.Group className='form-group'>
                        <Form.ControlLabel htmlFor='companyName'>Company Name *</Form.ControlLabel>
                        <Form.Control name='companyName' id='companyName' type='text' required />
                    </Form.Group>
                </div>

                <div className='form'>
                    <MdEmail className='icon-layout'/>
                    <Form.Group className='form-group'>
                        <Form.ControlLabel htmlFor='email'>Email *</Form.ControlLabel>
                        <Form.Control name='email' id='email' type='email' required />
                    </Form.Group>
                </div>

                <div className='form'>
                    <MdPhone className='icon-layout'/>
                    <Form.Group className='form-group'>
                        <Form.ControlLabel htmlFor='phone'>Phone *</Form.ControlLabel>
                        <Form.Control name='phone' id='phone' type='text' required/>
                    </Form.Group>
                </div>
                
                <div className='form'>
                    <MdLocationPin className='icon-layout'/>
                    <Form.Group className='form-group'>
                        <Form.ControlLabel htmlFor='state'>State *</Form.ControlLabel>
                        <Form.Control name='state' id='state' type='text' required />
                    </Form.Group>
                </div>
                    
                <div className='form'>
                    <MdNaturePeople className='icon-layout'/>
                    <Form.Group className='form-group'>
                        <Form.ControlLabel htmlFor='beneficiaries'>Beneficiaries</Form.ControlLabel>
                        <Form.Control name='beneficiaries' id='beneficiaries' type='text' />
                    </Form.Group>
                </div>

                <div className='form'>
                    <FaSackDollar className='icon-layout'/>
                    <Form.Group className='form-group'>
                        <Form.ControlLabel htmlFor='assets'>Assets</Form.ControlLabel>
                        <Form.Control name='assets' id='assets' type='text' />
                    </Form.Group>
                </div>

                <div className='form'>
                    <Form.Group className='form-group'>
                        <Button 
                            appearance="primary" 
                            type='submit'
                            onClick={handleSubmit}
                        >Submit</Button>
                    </Form.Group>
                </div>
                {message && (
                    <NotificationMessage 
                        response={messageType}
                        message={message}
                    />
                )}
            </Form>
            </div>
        </div>
    )
};

export default ContactPage;