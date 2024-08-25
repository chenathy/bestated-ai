import React, { useState } from 'react';
import { Form, RadioGroup, Radio, SelectPicker, Input, Button } from 'rsuite'; 
import 'rsuite/dist/rsuite.min.css';
// import Button from '../Button';
import './Form.css';


const FormComponent = ({ onFormComplete, ...props}) => {

    // Options in Form
    const Textarea = React.forwardRef((props, ref) => <Input {...props} as='textarea' ref={ref} />);

    const clientTypeOptions = [
        {label: 'An employer interested in employer-sponsored wills', value: 'employer'},
        {label: 'An attorney interested in becoming a Bestated partner', value: 'attorney'},
        {label: 'A financial advisor interested in the beneficiary API', value: 'financialAdvisor'},
        {label: 'An individual looking for more information', value: 'individual'},
        {label: 'Other', value: 'other'}
    ];

    const companySizeOptions = [
        {label: '1 - 10 people', value: '1 - 10'},
        {label: '11 - 20 people', value: '11 - 20'},
        {label: '21 - 50 people', value: '21 - 50'},
        {label: '50 - 250 people', value: '50 - 250'},
        {label: '250+', value: '250+'}
    ];

    const usStates = [
        { label: 'Alabama', value: 'AL' },
        { label: 'Alaska', value: 'AK' },
        { label: 'Arizona', value: 'AZ' },
        { label: 'Arkansas', value: 'AR' },
        { label: 'California', value: 'CA' },
        { label: 'Colorado', value: 'CO' },
        { label: 'Connecticut', value: 'CT' },
        { label: 'Delaware', value: 'DE' },
        { label: 'Florida', value: 'FL' },
        { label: 'Georgia', value: 'GA' },
        { label: 'Hawaii', value: 'HI' },
        { label: 'Idaho', value: 'ID' },
        { label: 'Illinois', value: 'IL' },
        { label: 'Indiana', value: 'IN' },
        { label: 'Iowa', value: 'IA' },
        { label: 'Kansas', value: 'KS' },
        { label: 'Kentucky', value: 'KY' },
        { label: 'Louisiana', value: 'LA' },
        { label: 'Maine', value: 'ME' },
        { label: 'Maryland', value: 'MD' },
        { label: 'Massachusetts', value: 'MA' },
        { label: 'Michigan', value: 'MI' },
        { label: 'Minnesota', value: 'MN' },
        { label: 'Mississippi', value: 'MS' },
        { label: 'Missouri', value: 'MO' },
        { label: 'Montana', value: 'MT' },
        { label: 'Nebraska', value: 'NE' },
        { label: 'Nevada', value: 'NV' },
        { label: 'New Hampshire', value: 'NH' },
        { label: 'New Jersey', value: 'NJ' },
        { label: 'New Mexico', value: 'NM' },
        { label: 'New York', value: 'NY' },
        { label: 'North Carolina', value: 'NC' },
        { label: 'North Dakota', value: 'ND' },
        { label: 'Ohio', value: 'OH' },
        { label: 'Oklahoma', value: 'OK' },
        { label: 'Oregon', value: 'OR' },
        { label: 'Pennsylvania', value: 'PA' },
        { label: 'Rhode Island', value: 'RI' },
        { label: 'South Carolina', value: 'SC' },
        { label: 'South Dakota', value: 'SD' },
        { label: 'Tennessee', value: 'TN' },
        { label: 'Texas', value: 'TX' },
        { label: 'Utah', value: 'UT' },
        { label: 'Vermont', value: 'VT' },
        { label: 'Virginia', value: 'VA' },
        { label: 'Washington', value: 'WA' },
        { label: 'West Virginia', value: 'WV' },
        { label: 'Wisconsin', value: 'WI' },
        { label: 'Wyoming', value: 'WY' },
        { label: 'Oversea', value: 'oversea'}
    ];


    // Collect Information
    const [formValue, setFormValue] = useState({
        contactName: '',
        type: '',
        companyName: '',
        size: '',
        email: '',
        phone: '',
        state: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [hasErrors, setHasErrors] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    const validateForm = () => {
        const errors = [];
    
        if (!formValue.contactName.trim()) {
          errors.push('Name is required.');
        }
    
        if (!formValue.type) {
          errors.push('Please select your client type.');
        }
    
        if (!formValue.email.trim()) {
          errors.push('Email is required.');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValue.email)) {
          errors.push('Please enter a valid email address.');
        }
    
        if (!formValue.state) {
          errors.push('State is required.');
        }
    
        if (!formValue.message.trim()) {
          errors.push('Message is required.');
        }
    
        setHasErrors(errors.length > 0);
        setErrorMessages(errors);
    
        return errors.length === 0; 
    };

    const handleSubmit = async() => {
        if (validateForm()){
            console.log(`formValue: ${JSON.stringify(formValue)}`); 

            onFormComplete(true);

            // // Saving Data throught API 
            // try {
            //     const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/submit`, {
            //         method: 'POST',
            //         headers: {
            //         'Content-Type': 'application/json',
            //         },
            //         body: JSON.stringify(formData),
            //     });
    
            //     if (response.ok) {
            //         alert('Your Info has been submitted successfully!');
            //     } else {
            //         alert('Failed to submit data.');
            //     }
            // } catch (error) {
            //     console.error('Error submitting data:', error);
            //     alert('An error occurred while submitting data.');
            // }


        } else {
            console.log(`Missing Info `)
        }
    } 



    return (
        <div className='form-container'>
            <Form
                fluid
            >
                <Form.Group>
                    <Form.ControlLabel htmlFor='name'><p>Name <span id='req'>*</span></p></Form.ControlLabel>
                    <Form.Control 
                        name='contactName' 
                        id='contactName'
                        type='text' 
                        placeholder='Enter your full name'
                        value={formValue.contactName}
                        onChange={(value) => setFormValue((prev) => ({...prev, contactName: value}))}
                        required 
                    />
                </Form.Group>

                <Form.Group>
                    <Form.ControlLabel><p>Who are you ? <span id='req'>*</span></p></Form.ControlLabel>
                    <RadioGroup name='type'>
                        {companySizeOptions.map(option => (
                            <Radio
                                key={option.value}
                                value={option.value}
                                required
                                onChange={(value) => setFormValue((prev) => ({...prev, type: value}))}
                            >
                                {option.label}
                            </Radio>
                        ))}

                    </RadioGroup>
                </Form.Group>

                <Form.Group>
                    <Form.ControlLabel htmlFor='company'><p>Company Name <span id='optional'>(optional)</span></p></Form.ControlLabel>
                    <Form.Control 
                        name='companyName' 
                        id='companyName'
                        type='text' 
                        placeholder='Enter your company name'
                        value={formValue.companyName}
                        onChange={(value) => setFormValue((prev) => ({...prev, companyName: value}))}
                    />
                </Form.Group>


                <Form.Group>
                    <Form.ControlLabel><p>Number of employees <span id='optional'>(optional)</span></p></Form.ControlLabel>
                    <RadioGroup name='size'>
                        {clientTypeOptions.map(option => (
                            <Radio
                                key={option.value}
                                value={option.value}
                                onChange={(value) => setFormValue((prev) => ({...prev, size: value}))}
                            >
                                {option.label}
                            </Radio>
                        ))}

                    </RadioGroup>
                </Form.Group>
                

                <Form.Group>
                    <Form.ControlLabel htmlFor='email'><p>Email <span id='req'>*</span></p></Form.ControlLabel>
                    <Form.Control 
                        name='email' 
                        id='email'
                        type='text' 
                        placeholder='Give us the best email to contact you at'
                        value={formValue.email}
                        onChange={(value) => setFormValue((prev) => ({...prev, email: value}))}
                        required 
                    />
                </Form.Group>


                <Form.Group>
                    <Form.ControlLabel htmlFor='phone'><p>Phone <span id='optional'>(optional, but suggested)</span></p></Form.ControlLabel>
                    <Form.Control 
                        name='phone' 
                        id='phone'
                        type='text' 
                        placeholder='Enter your phone number'
                        value={formValue.phone}
                        onChange={(value) => setFormValue((prev) => ({...prev, phone: value}))}
                    />
                </Form.Group>


                <Form.Group>
                    <Form.ControlLabel htmlFor='state'><p>State <span id='req'>*</span></p></Form.ControlLabel>
                    <Form.Control
                        name='state'
                        accepter={SelectPicker}
                        data={usStates}
                        placeholder='Choose state'
                        onChange={(value) => setFormValue((prev) => ({...prev, state: value}))}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.ControlLabel ><p>Message <span id='req'>*</span></p></Form.ControlLabel>
                    <Form.Control
                        name='message'
                        accepter={Textarea}
                        rows={5}
                        placeholder='Shoot us a message!'
                        value={formValue.message}
                        onChange={(value) => setFormValue((prev) => ({...prev, message: value}))}
                        required
                    />
                </Form.Group>

                <button type='submit' onClick={handleSubmit}>Submit message</button>
                {/* <Button 
                    textDisplay='Submit Message'
                    state='submit'
                /> */}

            </Form>

        </div>
    );
};


export default FormComponent;